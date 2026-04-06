"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define 3 slides with images and text content
const slides = [
  {
    src: "/bg.jpg",
    alt: "Team working 1",
    title: "Professional & Creative Design Solution",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    src: "/bg2.jpg",
    alt: "Team working 2",
    title: "Innovative Strategies for Your Business",
    description:
      "We provide innovative solutions to help your business grow and succeed in a competitive market.",
  },
  {
    src: "/bg3.jpg",
    alt: "Team working 3",
    title: "Designs That Inspire",
    description:
      "Our creative team crafts visually stunning designs that captivate your audience.",
  },
  
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Background image slider */}
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          fill
          className="object-cover transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-16 lg:px-32">
        <div className="max-w-xl text-left text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/80 drop-shadow-md">
            {slides[currentSlide].description}
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition">
              Get Started
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-md transition">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}