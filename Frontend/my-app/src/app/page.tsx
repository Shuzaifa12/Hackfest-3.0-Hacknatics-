"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export let demoAudio: HTMLAudioElement | null = null;

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type SpeechRecognition = any;

export default function Home() {
  const router = useRouter();
  const [userInteracted, setUserInteracted] = useState(false);

  // ✅ Speak message and wait until finished
  const speak = (text: string) => {
    return new Promise<void>((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.onend = () => resolve();
      speechSynthesis.speak(utterance);
    });
  };

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  // ✅ Initial Demo After First Interaction
  const runDemo = async () => {

    const res = await fetch("http://localhost:8000/init");
    const data = await res.json();

    // Play intro audio
    if (data.intro_audio) {
       demoAudio = new Audio(`http://localhost:8000${data.intro_audio}`);
      await new Promise<void>((resolve) => {
        demoAudio!.onended = () => resolve();
        demoAudio!.play().catch(() => {
          // Fallback to speech
          speak("Hello! I am your AI assistant. Let me give you a tour.");
          resolve();
        });
      });
    }

    // Navigate each step with speech
    for (const step of data.demo_steps) {
      if (step.action === "open_page" && step.target) {
        router.push(step.target);
        await delay(800); // Wait page transition
        await speak(step.message);
        await delay(2000); // Pause before next
      }
    }

  };

  // ✅ User must click to enable autoplay logic
  const handleUserClick = () => {
    if (!userInteracted) {
      setUserInteracted(true);
      runDemo();
    }
  };

  return (
    <div
      className="relative w-full min-h-screen"
    >
      <Image
        src="/Bg_image.png"
        alt="Linguo Background"
        fill
        priority
        className="object-fill md:object-cover"
      />
      <main className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 text-white text-center">
          Linguo AI
        </h1>

        <button onClick={handleUserClick} onTouchStart={handleUserClick}
        className="text-white text-md md:text-2xl px-4 py-2 rounded-md font-medium bg-pink-600 transition w-fit"> Start Assistant </button>

      </main>
    </div>
  );
}