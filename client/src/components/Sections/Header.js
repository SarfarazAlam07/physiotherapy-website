import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Treatments", path: "/orthopedic" },
  { name: "Reviews", path: "/patientreview" },
  { name: "Locations", path: "/location" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for Navbar shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white py-3 border-b"}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/images/main-logo.png" alt="Mirani Physio" className="h-10 md:h-12 w-auto object-contain" />
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path}
                className={({ isActive }) => 
                  `text-sm lg:text-base hover:text-green-600 transition ${isActive ? "text-green-600 font-bold border-b-2 border-green-500 pb-1" : ""}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="tel:+916299687357" className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition transform hover:-translate-y-0.5">
            <PhoneCall size={18} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg flex flex-col items-center py-6 space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => `text-lg font-medium ${isActive ? "text-green-600" : "text-gray-700"}`}
            >
              {link.name}
            </NavLink>
          ))}
          <a href="tel:+916299687357" className="bg-green-600 text-white px-6 py-2 rounded-full">
            +91 62996 87357
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;