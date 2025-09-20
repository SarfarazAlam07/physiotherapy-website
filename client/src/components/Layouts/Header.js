





import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Navigation links ko ek array mein rakhne se code saaf rehta hai
const navLinks = [
  { name: "About", path: "/About" },
  { name: "Treatments", path: "/orthopedic" },
  { name: "Patients Review", path: "/patientreview" },
  { name: "Locations", path: "/Location" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Yeh batata hai ki hum kis URL par hain

  // Page refresh karne ke liye handler function
  const handleNavClick = (event, path) => {
    if (location.pathname === path) {
      event.preventDefault();
      window.location.reload();
    }
  };

  return (
    <nav id="navId" className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side: Hamburger (mobile) + Logo */}
        <div className="flex items-center space-x-3">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <div className="flex items-center space-x-2">
            <NavLink to='/' onClick={(e) => handleNavClick(e, '/')}>
              <img
                src="/images/main-logo.png"
                alt="Logo"
                className="max-h-16 w-auto"
              />
            </NavLink>
          </div>
        </div>

        {/* Desktop Nav Links with Animation */}
        <ul className="hidden md:flex items-center space-x-4 font-medium">
          {navLinks.map((link) => {
            // Check if the current link is active
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} className="relative">
                <NavLink
                  to={link.path}
                  // Active state ke hisaab se styling apply karein
                  className={`
                    block px-4 py-2 text-md font-medium transition-colors duration-200
                    ${isActive
                      ? "bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg"
                      : "text-gray-700 hover:text-sky-600"
                    }
                  `}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.name}
                </NavLink>
                {/* Agar link active hai, toh pointer (triangle) dikhayein */}
                {isActive && (
                  <div
                    className="
                      absolute -bottom-2 left-1/2 -translate-x-1/2
                      w-0 h-0
                      border-l-[8px] border-l-transparent
                      border-r-[8px] border-r-transparent
                      border-t-[8px] border-t-sky-600
                    "
                  ></div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Contact Button */}
        <div>
          <NavLink to="tel:+916299687357"
            className="bg-green-500 text-white font-sm px-4 py-3 rounded-full hover:bg-sky-500 transition text-sm"
          >
            +91 62996 87357
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu (No changes here) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4 font-medium text-gray-700">
            <li>
              <NavLink to='/About' className="hover:text-sky-600" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
                About
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink to='/orthopedic' className="hover:text-sky-600" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
                Treatments
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink to='/patientreview' className="hover:text-sky-600" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
                Patients Review
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink to='/Location' className="hover:text-sky-600" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
                Locations
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

