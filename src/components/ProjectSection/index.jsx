import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import images, { HeroImages } from "../../constants/images";

const projects = [
  {
    title: "Container Terminal 2 & 4, Abu Dhabi",
    image: HeroImages.hero0,
  },
  {
    title: "Abu Dhabi Airport",
    image: images.airport,
  },
  {
    title: "Saudi German Hospital",
    image: images.hospital,
  },
];

export default function ProjectSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-12 overflow-hidden">
      {/* 🔹 Decorative Background (lightened & GPU-optimized) */}
      <div className="absolute inset-0 -z-10 will-change-transform">
        <motion.div
          initial={{ scale: 0.9, opacity: 0.2 }}
          animate={{ scale: 1.05, opacity: 0.3 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-black/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 1, opacity: 0.2 }}
          animate={{ scale: 1.1, opacity: 0.3 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-0 -right-40 w-[450px] h-[450px] bg-black/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#222223]">
          Our Projects
        </h2>

        <p className="text-center text-[#444] max-w-3xl mx-auto mb-10 leading-relaxed">
          We have successfully delivered essential construction and infrastructure
          materials across the UAE, including projects such as Container Terminal
          2 & 4 in Abu Dhabi, Abu Dhabi Airport, Saudi German Hospital, Sustainable
          City, multiple ADNOC stations, the New Presidential Palace, and Dragon
          Mart Extension — along with many more landmark developments.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-400 will-change-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3">
                <h3 className="text-white text-sm font-semibold text-center">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => navigate("/projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 pl-6 pr-4 py-2 bg-[#222223] text-[#F6F4F0] italic font-medium rounded-xl hover:shadow-lg cursor-pointer hover:bg-[#000] transition"
          >
            Show More <ArrowUpRight size={22} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
