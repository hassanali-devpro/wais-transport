import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from 'react'


const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/servies" },
  { label: "Projects", path: "/projects" },
  // { label: "Fleet", path: "/fleet" },
  { label: "Verticals", path: "/verticals" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to detect when to switch navbars
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderNavLinks = (className) =>
    navItems.map(({ label, path }) => (
      <li key={label} className=" [#F6F4F0]space-nowrap">
        <NavLink
          to={path}
          className={({ isActive }) =>
            `${className} ${isActive ? "font-semibold" : "font-semibold"}`
          }
        >
          {label}
        </NavLink>
      </li>
    ));

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out lg:py-0 py-4 ${isScrolled ? "bg-[#F6F4F0] shadow-md" : "bg-gradient-to-b from-gray-800 to-transparent"
        }`}
      onMouseEnter={() => setIsScrolled(true)} // Set to true on hover
      onMouseLeave={() => {
        if (window.scrollY <= 50) {
          setIsScrolled(false); // Set to false if not scrolled
        }
      }}
    >
      <div className="flex justify-between items-center px-[5%]">
        <div className="flex items-center justify-between w-full">
          <NavLink to="/">
            {!isScrolled ? (
              <img src="/nav1.png" className="w-20" alt="Logo" />
            ) : (
              <img src="/nav.png" className="w-20" alt="Logo" />
            )}
          </NavLink>
          <button
            type="button"
            className="lg:hidden text-light"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <FaBars size={26} className={isScrolled ? "text-black" : "text-[#F6F4F0]"} />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex ">
          <ul className={`flex items-center font-bold  ${isScrolled ? "text-black pb-6 pt-8 font-extrabold" : "pb-6 pt-8 text-[#F6F4F0]"}`}>
            {renderNavLinks("uppercase font-semibold hover:text-black mx-3")}
          </ul>
        </div>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 h-full w-full p-12 z-50 shadow-lg bg-[#F6F4F0] transition-all duration-300 ease-in-out transform ${toggleMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
            } lg:hidden`}
        >
          {/* Header row with Logo and Close button */}
          <div className="flex items-center justify-between">
            {/* Logo on left */}
            <img
              src="/nav.png"
              alt="Logo"
              className="h-16 w-auto"
            />

            {/* Close button on right */}
            <button
              type="button"
              className="text-light"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <FaTimes size={32} className="text-black" />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col items-start space-y-8 text-light text-black mt-10">
            {renderNavLinks("uppercase font-semibold text-2xl hover:pl-4 transition-all")}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
