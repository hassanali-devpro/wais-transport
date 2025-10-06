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
      {/* 🔹 Decorative Background (Only black-300 top-left & bottom-right) */}
      <div className="absolute inset-0 -z-10">
        {/* Top-left black blob */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.25 }}
          animate={{ scale: 1.1, opacity: 0.35 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-black/30 rounded-full blur-3xl"
        />

        {/* Bottom-right black blob */}
        <motion.div
          initial={{ scale: 1, opacity: 0.25 }}
          animate={{ scale: 1.2, opacity: 0.35 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-black/30 rounded-full blur-3xl"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: index * 0.9 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3">
                <h3 className="text-white text-sm font-semibold text-center">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => navigate("/projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 pl-6 pr-4 py-2 bg-[#222223] text-[#F6F4F0] italic font-medium rounded-xl hover:shadow-2xl cursor-pointer hover:bg-[#000000] transition"
          >
            Show More <ArrowUpRight size={25} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
