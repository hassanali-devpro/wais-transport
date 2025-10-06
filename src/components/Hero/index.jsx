import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Navbar from "../Navbar";

const Header = ({
  title,
  description,
  buttonText,
  pageLink,
  Hero,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const totalSlides = Object.keys(Hero).length;
  const intervalRef = useRef(null);

  // ✅ Preload images and show loader until all are ready
  useEffect(() => {
    let isMounted = true;

    const preloadImages = Object.values(Hero).map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(preloadImages).then(() => {
      if (isMounted) setAllLoaded(true);
    });

    return () => {
      isMounted = false;
    };
  }, [Hero]);

  // ✅ Auto-slide only when loaded and component is visible
  useEffect(() => {
    if (!allLoaded) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [allLoaded, totalSlides]);

  // ✅ Helper to get image opacity class
  const getSlideClass = (index) =>
    `absolute inset-0 transition-opacity duration-1000 ease-in-out ${
      index === activeIndex ? "opacity-100" : "opacity-0"
    }`;

  return (
    <>
      <Navbar />

      <div className="relative overflow-hidden w-full h-screen bg-[#F6F4F0]">
        {/* Loader Overlay */}
        {!allLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F6F4F0] z-50">
            <img
              src="/loader.png"
              alt="Company Logo"
              className="w-40 mb-6 opacity-90"
            />
            <div className="flex space-x-2">
              <span className="h-5 w-5 bg-[#373736] rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="h-5 w-5 bg-[#373736] rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="h-5 w-5 bg-[#373736] rounded-full animate-bounce" />
            </div>
          </div>
        )}

        {/* Hero Slides */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            allLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {Object.values(Hero).map((image, index) => (
            <div key={index} className={getSlideClass(index)}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover will-change-transform"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40 lg:from-black/70 lg:to-transparent pointer-events-none" />
              <div className="absolute w-full text-center lg:text-left lg:ml-[5%] gap-5 bottom-[15%] animate-slide-up text-white">
                <h1 className="text-4xl font-semibold leading-tight font-montserrat drop-shadow-lg">
                  {title}
                </h1>
                <p className="pb-4 text-md max-w-xl mx-auto lg:mx-0 drop-shadow-md">
                  {description}
                </p>
                <div className="flex justify-center lg:justify-start gap-2">
                  <ScrollLink
                    to={pageLink}
                    smooth={true}
                    duration={500}
                    className="btn italic border-2 py-1.5 px-6 rounded-xl font-semibold transition cursor-pointer hover:bg-white hover:text-black"
                  >
                    {buttonText}
                  </ScrollLink>
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
