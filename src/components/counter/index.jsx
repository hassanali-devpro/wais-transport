import React, { useEffect, useState, useRef } from "react";

const Counter = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [hasStarted, end, duration]);

  return (
    <div ref={ref} className="text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
        {count.toLocaleString()}+
      </h2>
      <p className="text-gray-600 text-lg mt-2">{label}</p>
    </div>
  );
};

const CounterSection = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Slower factor for mobile, faster for desktop
      const factor = isMobile ? 0.03 : 0.1;
      const value = window.scrollY * factor;
      setScrollLeft(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section className="relative overflow-hidden py-16 bg-[#F6F4F0]">
      {/* Background SVG with moving left */}
      <div
        className="absolute bottom-0 z-0 pointer-events-none transition-all duration-200"
        style={{ left: `${scrollLeft}%` }}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 400"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <g fill="#C0C0C0" opacity="0.3">
            <rect x="0" y="-100" width="40" height="500" transform="skewX(20)" />
            <rect x="80" y="-100" width="40" height="500" transform="skewX(20)" />
            <rect x="160" y="-100" width="40" height="500" transform="skewX(20)" />
          </g>
        </svg>
      </div>

      {/* Counters */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <Counter end={10} label="Years of Service" />
        <Counter end={4000000} label="Tons Delivered" />
        <Counter end={20} label="Projects" />
        <Counter end={200} label="Employees" />
      </div>
    </section>
  );
};

export default CounterSection;
