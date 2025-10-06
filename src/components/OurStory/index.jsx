import React from "react";
import images, { HeroImages } from "../../constants/images";

export default function OurStory({
  imageSrc = "/images/our-story-fleet.jpg",
  alt = "Volvo FH 460 fleet",
  className = "",
}) {
  return (
    <section
      className={`relative w-full px-[7%] bg-[#F6F4F0] py-12 overflow-hidden ${className}`}
      aria-label="Our story"
    >
      {/* Background Logo */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src="/flat.jpg" // update path to your actual logo
          alt="Company Logo Background"
          className="w-full h-full opacity-20"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative">
        {/* Centered Section Heading */}
        <div className="text-center mb-10">
          <h3 className="text-gray-500 font-medium text-sm uppercase tracking-wide mb-2">
            Our Story
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            From One Trailer to a Modern Fleet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full h-64 md:h-96 rounded-md shadow-2xl overflow-hidden">
            <img
              src={HeroImages.hero4}
              alt={alt}
              className="w-full h-full object-cover "
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Established in <b>2014</b> by <b>Mir Wais</b>, we began with a{" "}
              <b>single tipper</b> and an unwavering drive to win client trust in{" "}
              <b>Dubai’s competitive construction market</b>. Each challenge became
              a milestone. Today we operate a <b>new Volvo FH 460 fleet</b>, supplying{" "}
              <b>dune sand</b>, <b>aggregates</b>, <b>washed sand</b>, <b>road base</b>, and more—
              backed by <b>4M+ tons delivered</b> and <b>long-term partnerships</b>{" "}
              with leading crushers and contractors across{" "}
              <b>Dubai, Abu Dhabi, RAK, Fujairah, Hatta, and Oman</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
