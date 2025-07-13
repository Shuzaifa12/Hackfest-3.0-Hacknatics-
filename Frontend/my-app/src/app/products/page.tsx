"use client";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      href: "https://a.co/d/5odHHWT",
      img: "/images/laptop1.png",
      title: "ASUS ROG Strix Gaming Laptop",
      desc: "Experience next-level performance with Windows 11 Home, an Intel Core Ultra 9 275HX Processor, and an NVIDIA GeForce RTX 5070..."
    },
    {
      href: "https://ebay.us/m/Gz8hux",
      img: "/images/iphone.png",
      title: "Apple iPhone 14 128GB",
      desc: "eSIM, GPS, Bluetooth Enabled, Facial Recognition, Water-Resistant, NFC Connectivity, Video Calling, Vibration, Accelerometer, Proximity Sensor..."
    },
    {
      href: "https://ebay.us/m/RnLaIB",
      img: "/images/serum.png",
      title: "Anti Aging Hydrating Serum",
      desc: "Acne, Age Spots, Age-Defying, Blemishes, Dark Circles, Dark Spots, Dimpled Skin, Discoloration, Early Signs of Aging, Eczema..."
    },
    {
      href: "https://a.co/d/g2u4H81",
      img: "/images/bath.png",
      title: "Waterproof Shower Caddy 6-Pack",
      desc: "Easy, Enjoy a stress-free setup with our strong adhesives-no tools or drilling needed..."
    },
  ];

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
           Products
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto"
        >
         Explore our curated collection of smart tech, skincare, and everyday essentials — handpicked for quality, innovation, and style.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <motion.a
            key={i}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + i * 0.2 }}
            className="relative overflow-hidden rounded-2xl shadow-lg border border-pink-600 flex flex-col h-[400px]"
          >
            {/* Image */}
            <div className="relative flex-1">
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>

            {/* Always visible description */}
            <div className="p-4 bg-black/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-1 text-pink-400">{p.title}</h3>
              <p className="text-gray-200 text-xs">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
