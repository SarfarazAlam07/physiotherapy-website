import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand & Socials */}
        <div className="space-y-4">
          <img src="/images/main-logo.png" alt="Mirani Physio" className="h-16 brightness-0 invert opacity-80" />
          <p className="text-sm text-gray-400">
            Providing expert physiotherapy care across Patna, Gaya, and Jehanabad. Recover faster with us.
          </p>
          <div className="flex gap-4 pt-2">
            {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, idx) => (
              <a key={idx} href="#!" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-green-400 transition">About Us</Link></li>
            <li><Link to="/orthopedic" className="hover:text-green-400 transition">Treatments</Link></li>
            <li><Link to="/location" className="hover:text-green-400 transition">Our Centers</Link></li>
            <li><Link to="/patientreview" className="hover:text-green-400 transition">Patient Reviews</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>📍 <strong>Patna:</strong> Kankarbagh, Patna - 800020</li>
            <li>📍 <strong>Gaya:</strong> White House Colony, Gaya - 823001</li>
            <li>📞 <a href="tel:+916299687357" className="hover:text-green-400">+91 62996 87357</a></li>
            <li>✉️ <a href="mailto:contact@miraniphysio.com" className="hover:text-green-400">contact@miraniphysio.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2026 Mirani Physiotherapy. Developed by <span className="text-blue-400 font-semibold">TechEraX</span>.
      </div>
    </footer>
  );
};

export default Footer;