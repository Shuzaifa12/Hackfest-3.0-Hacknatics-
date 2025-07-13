from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from gtts import gTTS
import os
from datetime import datetime
from fastapi.responses import FileResponse

app = FastAPI()

# Allow CORS for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure static directory exists
if not os.path.exists("static"):
    os.makedirs("static")

# Mount static folder to serve audio
app.mount("/static", StaticFiles(directory="static"), name="static")

# Data model for user commands
class UserInput(BaseModel):
    text: str

INTRO_AUDIO_FILENAME = "intro.mp3"


def log_conversation(user_input: str, assistant_reply: str):
    log_file = "conversation_log.txt"
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(log_file, "a", encoding="utf-8") as f:
        f.write(f"\n[{timestamp}] USER: {user_input}\n")
        f.write(f"[{timestamp}] ASSISTANT: {assistant_reply}\n")

@app.on_event("startup")

async def startup_event():
    intro_text = (
        """Hello, I am your Linguo AI assistant.
        Let me give you a quick tour of this website. 
        I will automatically navigate you to the home page and explain the important features and related stuff present in the applicaton."""
    )
    tts = gTTS(intro_text)
    tts.save(f"static/{INTRO_AUDIO_FILENAME}")

#Route to save the tanscript of the conversation
@app.get("/download-log")
def download_log():
    log_path = "conversation_log.txt"
    return FileResponse(
        path=log_path,
        filename="conversation_log.txt",
        media_type="text/plain"
    )

@app.get("/init")
async def get_intro():
    return  {
  "intro_audio": "/static/intro.mp3",
  "demo_steps": [
    {
      "action": "open_page",
      "target": "/home",
      "message": "This is the home page including the main features of the application including the About and Product page along with the contact us section."
    },
    {
      "action": "open_page",
      "target": "/about",
      "message": "Here is the about page with complete project description, mission, scalable technology and why we are using it."
    },
    {
      "action": "open_page",
      "target": "/products",
      "message": "Welcome to the Product page. Explore our innovative products designed to simplify your life with quality and reliability.."
    }
  ]
}

# ✅ A dictionary mapping product keywords to URLs
PRODUCT_MAP = {
    "product laptop": "https://a.co/d/5odHHWT",
    "product iphone": "https://ebay.us/m/Gz8hux",
    "product hydrating": "https://ebay.us/m/RnLaIB",
    "product shower caddy": "https://a.co/d/g2u4H81"
}

@app.post("/process")
async def process_input(input: UserInput):

    text = input.text.lower()

    if "home" in text:
        reply = "Navigating to Home page."
        log_conversation(input.text, reply)
        return {"status": "success", "intent": {
            "action": "open_page",
            "target": "/home",
            "speak_message": reply
        }}

    elif "about" in text:
        reply = "Navigating to About page."
        log_conversation(input.text, reply)
        return {"status": "success", "intent": {
            "action": "open_page",
            "target": "/about",
            "speak_message": reply
        }}

    elif "products" in text:
        reply = "Navigating to Products page."
        log_conversation(input.text, reply)
        return {"status": "success", "intent": {
            "action": "open_page",
            "target": "/products",
            "speak_message": reply
        }}
    
    # Product-specific logic
    for keyword, url in PRODUCT_MAP.items():
        if keyword in text:
            reply = f"Opening {keyword.title()} page."
            log_conversation(input.text, reply)
            return {
                "status": "success",
                "intent": {
                    "action": "open_page",
                    "target": url,
                    "open_in_new_tab": True,
                    "speak_message": reply
                }
            }

    # If not understood
    reply = f"Sorry, I did not understand '{input.text}'."
    log_conversation(input.text, reply)
    return {"status": "success", "intent": {
        "action": "speak",
        "speak_message": reply
    }}
    


