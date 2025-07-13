"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-12">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-pink-600 to-pink-500"></div>

      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-pink-300 inline-block text-transparent bg-clip-text"
        >
          About Project
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto"
        >
          We build intelligent AI agents that help automate tasks, drive
          efficiency and bring next-level innovation to your business.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}

         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-black border border-pink-600 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/img2.png"
            alt="Data Insights"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-pink-400">
              Our Mission
            </h3>
            <p className="text-gray-300 text-sm">
              At Hackantic, our mission is to empower businesses and individuals with intelligent AI agents that simplify interaction, automate tasks, and drive innovation. We’re committed to building technology that’s smart, scalable, and truly human-centric.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black border border-pink-600 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/img1.png"
            alt="AI Bot"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-pink-400">
              Project Description
            </h3>
            <p className="text-gray-300 text-sm">
              An AI agent that autonomously welcomes users, delivers an
              interactive website demo by navigating through different pages,
              and intelligently responds to users’ voice commands in real time.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-black border border-pink-600 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/whyweuse.png"
            alt="AI Support"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-pink-400">
              Why we use this
            </h3>
            <p className="text-gray-300 text-sm">
            Our AI agent delivers interactive product demos, responds to voice commands in real-time, and showcases key features — all hands-free. Scalable, customizable, and built to boost user engagement while reducing the need for manual support.
            </p>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="bg-black border border-pink-600 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/img4.png"
            alt="Scalable Tech"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-pink-400">
              Scalable Tech
            </h3>
            <p className="text-gray-300 text-sm">
              Built to grow with you — our scalable AI solutions adapt effortlessly to your needs, whether you're a startup or an enterprise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}