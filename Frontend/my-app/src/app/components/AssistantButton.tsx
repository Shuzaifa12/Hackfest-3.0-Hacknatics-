"use client";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { demoAudio } from "@/app/page"; 

export default function AssistantButton() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [listening, setListening] = useState(false);
  const [response, setResponse] = useState("");

  const speak = (text: string) => {
    return new Promise<void>((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.onend = () => resolve();
      speechSynthesis.speak(utterance);
    });
  };

  const handleVoiceCommand = () => {
    // 🟢 Stop demo speech synthesis
    speechSynthesis.cancel();

    // 🟢 Stop demo audio if playing
    if (demoAudio) {
      demoAudio.pause();
      demoAudio.currentTime = 0;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setListening(true);

    recognition.onresult = async (event: any) => {
      const transcript = event.results[0][0].transcript;

      const result = await fetch("http://localhost:8000/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: transcript }),
      });

      const data = await result.json();
      setResponse(JSON.stringify(data, null, 2));
      setListening(false);

      const intent = data.intent;

       if (intent.action === "open_page" && intent.target) {
        if (intent.target.startsWith("http")) {
          // External URL - open in a new tab
          window.open(intent.target, "_blank");
        } else {
          // Internal route - navigate with Next.js router
          router.push(intent.target);
        }
      }

      if (intent.speak_message) {
        await speak(intent.speak_message);
      }
    };

    recognition.onerror = (event: any) => {
      console.error("Speech error:", event);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-gradient-to-br from-pink-500 to-purple-600 hover:scale-105 transition rounded-full p-4 shadow-lg text-white z-50"
      >
        <FaRobot size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 md:right-6 bg-white/95 backdrop-blur-xl p-4 rounded-xl w-[90%] max-w-xs md:max-w-sm shadow-2xl z-50">
          <h3 className="text-lg font-bold mb-2 text-pink-500">
            AI Assistant 🤖
          </h3>
          <p className="text-black mb-3 text-sm">
            Hi! How can I help you?
          </p>

          <button
            onClick={handleVoiceCommand}
            className={`${
              listening ? "bg-red-500" : "bg-pink-500"
            } text-white px-4 py-2 rounded-md font-medium hover:bg-pink-600 transition w-full`}
          >
            {listening ? "🎧 Listening..." : "🎙️ Start Voice Chat"}
          </button>

          {response && (
            <pre className="mt-2 bg-gray-100 p-2 rounded text-xs text-black max-h-40 overflow-auto">
              {response}
            </pre>
          )}
        </div>
      )}

    </>
  );
}
