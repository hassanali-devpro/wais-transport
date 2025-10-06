import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import images from "../../constants/images";

const content = [
  {
    title: "Building Materials",
    image: images.building,
    details: [
      "Dune (Sweet) Sand",
      "Washed Sand",
      "Black Sand",
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
  const [duration, setDuration] = useState(25); // slower, smoother

  // ✅ Responsive speed control
  useEffect(() => {
    const handleResize = () => {
      setDuration(window.innerWidth < 640 ? 10 : 20);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Continuous scroll animation
  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-50%"], // only half width, because we duplicate content
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
    <section className="w-[90%] mx-auto my-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">What We Deliver</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          From dune sand to high-spec aggregates, we keep your schedule on
          track.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex will-change-transform"
          animate={controls}
          style={{ x: 0 }}
        >
          {/* Duplicate once for infinite loop */}
          {[...content, ...content].map((item, i) => (
            <div
              key={i}
              className="relative w-72 h-96 m-4 bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 group transition-transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                loading="lazy"
                draggable="false"
              />

              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white font-semibold text-lg">
                {item.title}
              </div>

              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white p-5 text-sm">
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
    </section>
  );
};

export default CardCarousel;
