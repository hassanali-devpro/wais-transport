import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectSection({
  title = "Our Projects",
  description = "We have successfully delivered essential construction and infrastructure materials across the UAE — supporting many landmark developments with reliability and precision.",
  projects = [],
  showLimited = false,
}) {
  const navigate = useNavigate();
  const visibleProjects = showLimited ? projects.slice(0, 3) : projects;

  return (
    <section className="relative py-12 overflow-hidden">
      {/* 🔹 Decorative Background */}
      <div className="absolute inset-0 -z-10 will-change-transform">
        <motion.div
          initial={{ scale: 0.9, opacity: 0.15 }}
          animate={{ scale: 1.05, opacity: 0.25 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-black/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 1, opacity: 0.15 }}
          animate={{ scale: 1.1, opacity: 0.25 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-0 -right-40 w-[450px] h-[450px] bg-black/20 rounded-full blur-3xl"
        />
      </div>

      {/* 🔹 Content */}
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#222223]">
          {title}
        </h2>

        <p className="text-center text-[#444] max-w-3xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>

        {/* 🔹 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />

              {/* Always visible title */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white text-sm font-semibold text-center">
                  {project.title}
                </h3>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-center items-center text-white p-5 text-sm"
              >
                <motion.h4
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-lg font-semibold mb-2 text-center"
                >
                  {project.title}
                </motion.h4>
                <ul className="list-disc list-inside space-y-1 text-left">
                  {project.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 🔹 Show More Button */}
        {showLimited && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={() => navigate("/projects")}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="flex items-center gap-2 pl-6 pr-4 py-2 bg-[#222223] text-[#F6F4F0] italic font-medium rounded-xl hover:shadow-lg hover:bg-[#000] transition-colors duration-300"
            >
              Show More <ArrowUpRight size={22} />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
