import React from "react";
import img from "../assets/Our Collection/Peacock.jpeg";
import img1 from "../assets/Our Collection/Glass+Painting+Team+building+day+Birmingham+The+Crafty+Hen.jpg";
import img2 from "../assets/Our Collection/83aa22447fb7ff2ecfa9dcbbdaba547b.jpg";
import img3 from "../assets/Our Collection/lampwork_orig.png";
import img4 from "../assets/Our Collection/13837.jpg";
import img5 from "../assets/Our Collection/Paper Craft Ideas for Organization_ Stylish Solutions.jpeg";
import bgImg from "../assets/Other/abstract-art-background-E91C4D.jpg";
import { Link } from "react-router-dom";

const OurCollection = () => {
  const images = [
    { src: img4, text: "Card Making", link: "/artAndCraft/cardMaking" },
    { src: img5, text: "Scrapbooking", link: "/artAndCraft/scrapbooking" },
    {
      src: img2,
      text: "Paper Quilling & origami",
      link: "/artAndCraft/paperQuillingOrigami",
    },
    { src: img1, text: "Glass Painting", link: "/artAndCraft/glassPainting" },
    { src: img, text: "Lampworking", link: "/artAndCraft/lampworking" },
    {
      src: img3,
      text: "Glass Dying & Staining",
      link: "/artAndCraft/glassDyingStaining",
    },
  ];

  return (
    <div className="relative border-t-2 border-blue-500">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${bgImg})`, filter: "brightness(60%)" }} // Adjust opacity here
      ></div>
      {/* Main Content */}
      <div className="relative container mx-auto z-10">
        <h1 className="pt-10 text-3xl md:text-4xl font-bold text-center mb-10">
          Our Collection
        </h1>
        <div className="pb-20">
          <div className="flex flex-wrap justify-around gap-4">
            {images.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="relative md:w-50 w-full md:h-64 m-2 rounded-2xl overflow-hidden group shadow-2xl"
              >
                <img
                  className="w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90 hover:cursor-pointer"
                  src={item.src}
                  alt={`Image ${index + 1}`}
                />

                {/* Hover Text */}
                <div className="absolute bottom-0 left-0 w-full bg-[#258592] bg-opacity-70 text-white text-center p-2 opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.text}
                </div>
                <div className="md:hidden absolute bottom-0 left-0 w-full bg-[#364142] bg-opacity-70 text-white text-center p-2 opacity-80 transition-all duration-500">
                  {item.text}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCollection;
