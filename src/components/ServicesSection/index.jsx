import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import images from "../../constants/images"; // importing from constants

const content = [
  {
    title: "Building Materials",
    image: images.building,
    details: [
      'Dune (Sweet) Sand',
      'Washed Sand',
      'Black Sand',
      'Aggregates (¾", ⅜", 3/16")',
    ],
  },
  {
    title: "Road & Concrete Base",
    image: images.roadBase,
    details: ["Road Base", "Sub Base", "Gravel", "Fine Materials"],
  },
  {
    title: "Debris & Waste Collection",
    image: images.debri,
    details: ["Dubai Municipality–approved disposal"],
  },
  {
    title: "Logistics & Transport",
    image: images.logistics,
    details: [
      "Crusher to site / plant delivery",
      "On-site refueling for heavy equipment",
    ],
  },
  {
    title: "Diesel Supply",
    image: images.fuel,
    details: [
      "Crusher to site / plant delivery",
      "On-site refueling for heavy equipment",
    ],
  },
];

const CardCarousel = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [duration, setDuration] = useState(20);

  // detect screen size for speed
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDuration(10); // faster on mobile
      } else {
        setDuration(20); // normal on desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          repeat: Infinity,
          duration,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls, duration]);

  return (
    <div className="w-[90%] mx-auto my-10">
      {/* Section Title & Intro */}
      <div className="text-center mb-8 px-4 my-10">
        <h2 className="text-3xl font-bold text-gray-800">What We Deliver</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          From dune sand to high-spec aggregates, we keep your schedule on track.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div className="flex" animate={controls}>
          {[...content, ...content].map((item, i) => (
            <div
              key={i}
              className="relative w-72 h-96 m-4 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group flex-shrink-0"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent text-white font-semibold text-lg">
                {item.title}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white p-5 text-sm">
                <ul className="list-disc list-inside space-y-1 text-left">
                  {item.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CardCarousel;
