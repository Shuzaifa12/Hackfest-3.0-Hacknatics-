"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-24 lg:pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://imageio.forbes.com/specials-images/imageserve/67aaf20d169e6642861143a8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds)",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 md:bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between h-full">
        <div className="w-full md:w-[70%] space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white"
          >
            Builds AI <span className="text-pink-500">That Work Like Humans</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-base sm:text-lg md:text-xl max-w-xl text-gray-200 mx-auto md:mx-0"
          >
            From conversation to automation, our AI agents mimic human-like reasoning and behavior, giving you the power to do more, faster.
          </motion.p>
        </div>
      </div>

    </section>
  );
}