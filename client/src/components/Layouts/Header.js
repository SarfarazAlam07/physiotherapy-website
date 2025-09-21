import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Navigation links ko ek array mein rakhne se code saaf rehta hai
const navLinks = [
  { name: "About", path: "/About" },
  { name: "Treatments", path: "/orthopedic" },
  { 
    name: "Patients Review", 
    shortName: "Reviews", // iPad ke liye short version
    path: "/patientreview" 
  },
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
      {/* Desktop aur larger screens ke liye margins add kiye hain */}
      <div className="container mx-auto px-4 sm:px-4 lg:px-8 xl:px-12 2xl:px-16 py-2 sm:py-3 flex items-center justify-between">
        
        {/* Left side: Hamburger (mobile only) + Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Sirf mobile ke liye hamburger - md:hidden (768px se kam mein show hoga) */}
          <button
            className="md:hidden text-gray-700 p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="flex items-center">
            <NavLink to='/' onClick={(e) => handleNavClick(e, '/')}>
              <img
                src="/images/main-logo.png"
                alt="Logo"
                className="h-12 sm:h-14 md:h-16 lg:h-16 w-auto object-contain sm:px-4 md:px-6 lg:px-10"
              />
            </NavLink>
          </div>
        </div>

        {/* Desktop aur Tablet Nav Links - Show on medium screens (768px+) */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4 font-medium">
          {navLinks.map((link) => {
            // Check if the current link is active
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} className="relative">
                <NavLink
                  to={link.path}
                  // Active state ke hisaab se styling apply karein
                  className={`
                    block px-2 lg:px-3 xl:px-4 py-2 text-xs md:text-sm lg:text-sm xl:text-md font-medium transition-colors duration-200
                    ${isActive
                      ? "bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg"
                      : "text-gray-700 hover:text-sky-600"
                    }
                  `}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {/* iPad mein short name dikhayein, desktop mein full name */}
                  <span className="md:hidden lg:inline">{link.name}</span>
                  <span className="hidden md:inline lg:hidden">
                    {link.shortName || link.name}
                  </span>
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

        {/* Contact Button - Responsive sizing */}
        <div className="flex-shrink-0 sm:px-10">
          <NavLink 
            to="tel:+916299687357"
            className="bg-green-500 text-white font-medium px-2 sm:px-4 py-2 sm:py-3 rounded-full hover:bg-sky-500 transition text-xs sm:text-sm whitespace-nowrap"
          >
            +91 62996 87357
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu - Shows only on screens smaller than md (768px) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          {/* Mobile menu mein bhi consistent margins */}
          <ul className="flex flex-col space-y-1 px-4 sm:px-6 py-3 font-medium text-gray-700">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <React.Fragment key={link.name}>
                  <li>
                    <NavLink 
                      to={link.path} 
                      className={`
                        block px-3 py-3 rounded-md transition-colors duration-200
                        ${isActive
                          ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                          : "hover:text-sky-600 hover:bg-gray-50"
                        }
                      `}
                      onClick={() => { 
                        setIsOpen(false); 
                        window.scrollTo(0, 0); 
                      }}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                  {index < navLinks.length - 1 && (
                    <hr className="border-gray-200" />
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;