import React from 'react';
import {Link} from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const FooterLink = ({ to, children }) => (
    <Link to={to || "#"} className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
      {children}
    </Link>
  );

  return (
    <footer id="footer" className="bg-gray-200 text-gray-800 border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto pt-10 md:pt-14 pb-12 px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Logo, Socials, and Quick Links */}
          <div>
            <div>
              <img src="./images/main-logo.png" alt="Mirani Logo" className="h-20 mb-6 brightness-75" />
              {/* ✅ This container now allows icons to wrap */}
              <div className="flex flex-wrap gap-2">
                {/* ✅ 'flex-shrink-0' has been removed from each icon */}
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><FaFacebookF /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><FaLinkedinIn /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><FaTwitter /></a>
                <a href="https://www.instagram.com/miraniphysio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><FaInstagram /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><FaYoutube /></a>
              </div>
            </div>  

            {/* Quick Links section */}
            <div className="mt-12"> 
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-3 flex flex-col">
                <FooterLink>Careers</FooterLink>
                <FooterLink>Partners</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink>Corporate</FooterLink>
                <FooterLink>Disclaimer & Privacy</FooterLink>
              </div>
            </div>
          </div>

          {/* Column 2: Physiotherapy Programs */}
          <div>
            <h3 className="font-bold text-lg mb-4">Physiotherapy Programs</h3>
            <div className="space-y-3 flex flex-col">
              <FooterLink>Physiotherapy Near Me</FooterLink>
              <FooterLink>Physiotherapy at Home</FooterLink>
              <FooterLink>Online Physiotherapy</FooterLink>
              <FooterLink>Inpatient Stroke Rehab</FooterLink>
              <FooterLink>Pulmonary Rehab</FooterLink>
              <FooterLink>Neuro Rehab</FooterLink>
              <FooterLink>Prenatal Program</FooterLink>
              <FooterLink>Therapies</FooterLink>
              {/* ... other links */}
            </div>
          </div>

          {/* Column 3: Mirani Locations */}
          <div>
            <h3 className="font-bold text-lg mb-4">Mirani Locations - Cities</h3>
            <div className="space-y-3 flex flex-col">
              <FooterLink to="/location">Physiotherapy clinic in Gaya</FooterLink>
              <FooterLink to="/location">Physiotherapy clinics in Jehanabad</FooterLink>
              <FooterLink to="/location">Physiotherapy clinics in Patna</FooterLink>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-white py-2 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-bold text-black-500">
          <p>
            Copyrights © 2025 Mirani Physiotherapy & Rehab. All Rights Reserved. | Website Developed By{' '}
            <a 
              href="https://www.google.com" // Replace with actual TechEraX website link
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline text-lg"
            >
              TechEraX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;