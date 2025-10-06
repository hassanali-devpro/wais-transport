import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Navbar from "../Navbar";
import React from "react";

const Header = ({ title, description, buttonText1, pageLink1, buttonText, pageLink, Hero }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const itemsRef = useRef([]);

  const totalSlides = Object.keys(Hero).length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleImageLoad = () => setLoadedCount((prev) => prev + 1);

  // const allLoaded = false;
  const allLoaded = loadedCount >= totalSlides;


  return (
    <>
      <Navbar />

      <div className="relative overflow-hidden w-full h-[100vh]">
        {/* Loader overlay */}
        {!allLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#F6F4F0] z-50">
            {/* Company Logo */}
            <img
              src="/loader.png" // change path to your logo
              alt="Company Logo"
              className="w-40 mb-6 opacity-90"
            />

            {/* Three Dots Loader */}
            <div className="flex space-x-2 mb-5">
              <span className="h-5 w-5 bg-[#373736] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="h-5 w-5 bg-[#373736] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="h-5 w-5 bg-[#373736] rounded-full animate-bounce"></span>
            </div>
          </div>
        )}


        <div
          className={`absolute inset-0 flex transition-opacity duration-700 ease-in-out ${allLoaded ? "opacity-100" : "opacity-0"
            }`}
        >
          {Object.values(Hero).map((image, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40 lg:from-black/70 lg:to-transparent"></div>

              <div className="absolute w-full text-center lg:text-left lg:ml-[10%] gap-5 bottom-[15%] animate-slide-up text-white">
                <h1 className="text-4xl font-semibold leading-tight font-montserrat">{title}</h1>
                <p className="pb-4 text-md max-w-xl mx-auto lg:mx-0">
                  {description}
                </p>
                <div className=" mx-auto justify-center sm:justify-start flex gap-2">
                  <ScrollLink
                    to={pageLink}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="btn italic border-2 py-1.5 px-6 rounded-xl font-semibold transition cursor-pointer"
                  >
                    {buttonText}
                  </ScrollLink>
                  {/* <ScrollLink
                    to={pageLink1}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="btn bg-[#F6F4F0] italic text-black pt-2 pb-3 px-6 rounded-lg font-semibold transition cursor-pointer"
                  >
                    {buttonText1}
                  </ScrollLink> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Header;
