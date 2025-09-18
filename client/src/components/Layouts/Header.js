import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger aur close icon
import '../../App.css';
import './Header.css';




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navId"className="bg-white shadow-md fixed top-0 left-0 w-full z-50 shadow-lg fixed ">
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
          <div className="flex items-center space-x-2  ">
            <NavLink to='/'><img
              src="/images/main-logo.png"
              alt="Logo"
              className="max-h-16 w-auto brightness-75"
            /></NavLink>
            <h1 className="flex flex-col text-xl font-bold text-gray-700 leading-tight">
            </h1>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <NavLink to='/About' className="hover:text-sky-600">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/OrthopedicConditions' className="hover:text-sky-600">
              Treatments
            </NavLink>
          </li>
          <li>
            <NavLink to='/patientreview' className="hover:text-sky-600">
              Patients Review
            </NavLink>
          </li>
          <li>
            <NavLink to='/Location' className="hover:text-sky-600">
              Locations
            </NavLink>
          </li>
        </ul>

        {/* Contact Button (Always visible) */}
        <div>
          <NavLink to="tel:+916299687357"
            className="bg-green-500 text-white font-bold px-4 py-2 rounded-full hover:bg-sky-400 transition text-sm"
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
              <NavLink to='/About'
                className="hover:text-sky-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink to="#conditions"
                className="hover:text-sky-600"
                onClick={() => setIsOpen(false)}
              >
                Treatments
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink to='/PatientReviewPage'
                className="hover:text-sky-600"
                onClick={() => setIsOpen(false)}
              >
                Patients Review
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink to='/Location'
                className="hover:text-sky-600"
                onClick={() => setIsOpen(false)}
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
