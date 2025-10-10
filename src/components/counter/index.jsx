import React, { useEffect, useState, useRef } from "react";
import { Clock, Truck, Building2, Users } from "lucide-react"; // Lucide Icons

// Optimized Counter Component
const Counter = ({ end, label, duration = 2000, Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, [end, duration]);

  return (
    <div
      ref={ref}
      className="text-center relative z-10 flex flex-col items-center"
    >
      {/* Counter Number */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
        {count.toLocaleString()}+
      </h2>

      {/* Label + Transparent Icon */}
      <div className="flex items-center justify-center gap-2 mt-2">
        <Icon className="w-6 h-6 text-gray-700 opacity-40" />
        <p className="text-gray-700 text-lg font-medium">{label}</p>
      </div>
    </div>
  );
};

// Counter Section
const CounterSection = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    let lastScrollY = 0;
    let ticking = false;
    const factor = window.innerWidth < 768 ? 0.03 : 0.1;

    const updatePosition = () => {
      svg.style.left = `${lastScrollY * factor}%`;
      ticking = false;
    };

    const onScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 bg-[#F6F4F0]">
      {/* Moving Background SVG */}
      <div
        ref={svgRef}
        className="absolute bottom-0 z-0 pointer-events-none will-change-transform"
        style={{ left: "0%" }}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 400"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <g fill="#C0C0C0" opacity="0.25">
            <rect x="0" y="-100" width="40" height="500" transform="skewX(20)" />
            <rect
              x="80"
              y="-100"
              width="40"
              height="500"
              transform="skewX(20)"
            />
            <rect
              x="160"
              y="-100"
              width="40"
              height="500"
              transform="skewX(20)"
            />
          </g>
        </svg>
      </div>

      {/* Counters */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        <Counter end={10} label="Years of Service" Icon={Clock} />
        <Counter end={4000000} label="Tons Delivered" Icon={Truck} />
        <Counter end={20} label="Projects" Icon={Building2} />
        <Counter end={200} label="Employees" Icon={Users} />
      </div>
    </section>
  );
};

export default CounterSection;
