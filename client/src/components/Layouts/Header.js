import React, { useState } from "react";
// 1. react-router-dom से 'useLocation' को इम्पोर्ट करें
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import '../../App.css';
import './Header.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // 2. useLocation हुक को कंपोनेंट में कॉल करें
  const location = useLocation();

  // 3. पेज रिफ्रेश करने के लिए हैंडलर फंक्शन बनाएं
  const handleNavClick = (event, path) => {
    // अगर वर्तमान पेज का पाथ और लिंक का पाथ एक ही है
    if (location.pathname === path) {
      event.preventDefault(); // लिंक के डिफ़ॉल्ट एक्शन को रोकें
      window.location.reload(); // पेज को रिफ्रेश करें
    }
  };

  return (
    <nav id="navId" className="bg-white shadow-md fixed top-0 left-0 w-full z-50 shadow-lg fixed ">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side: Hamburger (mobile) + Logo */}
        <div className="flex items-center space-x-3">
          {/* Hamburger (Mobile Only) */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo (Always visible) */}
          <div className="flex items-center space-x-2">
            {/* 4. लोगो (होम लिंक) पर भी onClick जोड़ें */}
            <NavLink to='/' onClick={(e) => handleNavClick(e, '/')}>
              <img
                src="/images/main-logo.png"
                alt="Logo"
                className="max-h-16 w-auto brightness-75"
              />
            </NavLink>
            <h1 className="flex flex-col text-xl font-bold text-gray-700 leading-tight">
            </h1>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            {/* 5. सभी डेस्कटॉप लिंक्स पर onClick जोड़ें */}
            <NavLink to='/About' className="hover:text-sky-600" onClick={() => window.scrollTo(0, 0)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/orthopedic' className="hover:text-sky-600" onClick={() => window.scrollTo(0, 0)}>
              Treatments
            </NavLink>
          </li>
          <li>
            <NavLink to='/patientreview' className="hover:text-sky-600" onClick={() => window.scrollTo(0, 0)}>
              Patients Review
            </NavLink>
          </li>
          <li>
            <NavLink to='/Location' className="hover:text-sky-600" onClick={() => window.scrollTo(0, 0)}>
              Locations
            </NavLink>
          </li>
        </ul>

        {/* Contact Button (Always visible) */}
        <div>
          <NavLink to="tel:+916299687357"
            className="bg-green-500 text-white font-sm px-2 py-2 rounded-full hover:bg-sky-400 transition text-sm"
          >
            +91 62996 87357
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4 font-medium text-gray-700">
            <li>
              {/* 6. सभी मोबाइल लिंक्स पर onClick को अपडेट करें */}
              <NavLink to='/About'
                className="hover:text-sky-600"
                onClick={() => window.scrollTo(0, 0)}
              >
                About
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink to='/orthopedic'
                className="hover:text-sky-600"
               onClick={() => window.scrollTo(0, 0)}
              >
                Treatments
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink to='/patientreview'
                className="hover:text-sky-600"
                onClick={() => window.scrollTo(0, 0)}
              >
                Patients Review
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink to='/Location'
                className="hover:text-sky-600"
                onClick={() => window.scrollTo(0, 0)}
              >
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
