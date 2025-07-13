"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const MobileLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className="block text-white hover:text-pink-400 font-medium transition"
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-white font-bold text-2xl tracking-wide"
            >
              HACK<span className="text-pink-400">NATICS</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/home"
              className="flex items-center text-white hover:text-pink-400 font-medium transition"
            >
              Home
            </Link>

             <Link
              href="/about"
              className="flex items-center text-white hover:text-pink-400 font-medium transition"
            >
              About
            </Link> 
            
            <Link
              href="/products"
              className="flex items-center text-white hover:text-pink-400 font-medium transition"
            >
              Products
            </Link>

            <a
              href="http://localhost:8000/download-log"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-4 py-2 rounded-md font-medium hover:bg-pink-600 transition"
            >
            📥 Script
            </a>
           
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-white p-2 rounded-full transition ${
                isOpen ? "bg-black/50 backdrop-blur-sm" : ""
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
  <div className="md:hidden bg-black/40 backdrop-blur-none px-4 pt-4 pb-6 space-y-3 rounded-b-xl border-t border-white/20">
    <MobileLink href="/home">Home</MobileLink>
    <MobileLink href="/products">Product</MobileLink>
    <MobileLink href="/about">About</MobileLink>
    <a
      href="http://localhost:8000/download-log"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-white font-medium rounded hover:bg-pink-600 transition"
    >
    Script
    </a>
  </div>
)}

    </nav>
  );
}


