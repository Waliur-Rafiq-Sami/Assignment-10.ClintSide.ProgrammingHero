import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/HeroImg/img1.jpg";
import img2 from "../assets/HeroImg/img2.jpg";
import img3 from "../assets/HeroImg/img3.jpg";
import img4 from "../assets/HeroImg/img4.jpg";
import img5 from "../assets/HeroImg/img5.jpg";
import img6 from "../assets/HeroImg/img6.jpg";
import img7 from "../assets/HeroImg/img7.jpg";
import img8 from "../assets/HeroImg/img8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-80 md:h-[600px] lg:h-[800px] overflow-hidden mx-auto border-[#e1ff35] border-t-2 ">
      {/* Image Slides with Animation */}
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Centered Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to Craft Zone
        </h1>
        <p className="mt-2 text-lg md:text-xl">
          Explore Beautiful Paper Crafts & Glass Art
        </p>
        <button className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
          Explore Now
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
