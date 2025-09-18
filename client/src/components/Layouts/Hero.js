import React from 'react';
import { Link } from 'react-router-dom';
import { physiotherapyData } from '../Data';
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // 1. Icons imported from react-icons

// 2. Old PhoneIcon and WhatsAppIcon components are removed.

const PhysiotherapySection = () => {
  const { mainTitle, description, specialist, mainImage } = physiotherapyData;

  return (
    <div className="bg-gray-50 font-sans px-8 pb-8 pt-24 md:px-16 md:pb-16 md:pt-32">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* --- Row 1: Main Title and Main Image --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {mainTitle}
            </h1>
            <p className="text-gray-600 text-lg">
              {description}
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img 
              src={mainImage} 
              alt="Physiotherapy session" 
              className="rounded-3xl shadow-lg w-full max-w-md object-cover object-top"
            />
          </div>
        </div>

        {/* --- Row 2: Doctor Info and Doctor Image (Order Updated for Mobile) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Doctor Info Section */}
            <div className="text-center md:text-left md:pl-10 md:order-2">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                {specialist.name}
                </h2>
                <p className="text-xl text-gray-700 font-medium mt-1">
                {specialist.title}
                </p>
                <p className="text-gray-600 mt-4 max-w-md mx-auto md:mx-0">
                {specialist.bio}
                </p>
            </div>

            {/* Doctor Image Section */}
            <div className="flex justify-center md:justify-start md:order-1">
                <img 
                src={specialist.image} 
                alt={specialist.name}
                className="rounded-3xl shadow-lg w-full max-w-sm h-80 md:h-96 object-cover object-top"
                />
            </div>
        </div>

      </div>

      {/* Floating Icons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-50">
             <Link to="tel:+916299687357" className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
              <FaPhoneAlt className="w-6 h-6 text-white" />
            </Link>
            <Link to={`https://wa.me/+917091944667?text=Hello,%20I%20want%20to%20book%20an%20appointment`}
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
>
              {/* 3. Using the new icon component */}
              <FaWhatsapp className="w-6 h-6 text-white" />
            </Link>
      </div>
    </div>
  );
};

export default PhysiotherapySection;