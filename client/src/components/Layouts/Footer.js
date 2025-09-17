import React from 'react';
import {Link} from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const FooterLink = ({ children }) => (
    <Link to="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
      {children}
    </Link>
  );

  return (
    <footer id="footer" className="bg-gray-200 text-gray-800 border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Logo, Socials, and Quick Links */}
          <div>
            {/* Logo and Socials */}
            <div>
              <img src="./images/main-logo.png" alt="Mirani Logo" className="h-20 mb-6 brightness-75" />
              <div className="flex space-x-4">
                
                <Link to="#" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><FaFacebookF /></Link>
                <Link to="#" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><FaLinkedinIn /></Link>
                <Link to="#" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><FaTwitter /></Link>
                <Link to="#" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><FaInstagram /></Link>
                <Link to="#" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><FaYoutube /></Link>
              </div>
            </div>  

            {/* Quick Links section */}
            <div className="mt-12"> 
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-3 flex flex-col">
                <FooterLink>Careers</FooterLink>
                <FooterLink>Partners</FooterLink>
                <FooterLink>Contact</FooterLink>
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
            </div>
          </div>

          {/* Column 3: Reliva Locations */}
          <div>
            <h3 className="font-bold text-lg mb-4">Mirani Locations - Cities</h3>
            <div className="space-y-3 flex flex-col">
              <FooterLink>Physiotherapy clinic in Gaya</FooterLink>
              <FooterLink>Physiotherapy clinics in Jehanabad</FooterLink>
              <FooterLink>Physiotherapy clinics in Patna</FooterLink>
            </div>
          </div>
        </div>
      </div>

      {/* This full-width bar will now correctly touch the edges and the bottom */}
      <div className="w-full bg-white py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          {/* ✨ CORRECTED LINE BELOW */}
          <p>
            Copyrights © 2025 Mirani Physiotherapy & Rehab. All Rights Reserved. | Website Developed By{' '}
            <a 
              href="www.google.com" // Add link to TechEraX website here
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