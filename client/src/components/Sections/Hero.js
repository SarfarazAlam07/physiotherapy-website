import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import axiosClient from "../../api/axiosClient";
import { heroDefaultData } from "../../data/heroDefaults";

const Hero = ({ onBookNow }) => {
  const [doctorData, setDoctorData] = useState(heroDefaultData);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await axiosClient.get("/api/doctors");
        if (res.data && res.data.length > 0) {
          setDoctorData(res.data[0]);
        }
      } catch (err) {}
    };
    fetchDoctor();
  }, []);

  // Data destructuring
  const { mainTitle, description, mainImage, specialist } = doctorData;

  return (
    <div className="bg-gray-50 font-sans px-6 pb-12 pt-6 md:pt-15 md:px-16 relative min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* --- SECTION 1: Main Banner (Title + Big Image) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6 animate-in fade-in duration-700">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {mainTitle}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <button
                onClick={onBookNow}
                className="bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-700 transition transform hover:scale-105"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end animate-in slide-in-from-right duration-700">
            <img
              src={mainImage || heroDefaultData.mainImage}
              alt="Physiotherapy"
              className="rounded-3xl shadow-xl w-full max-w-md object-cover h-[350px] md:h-[400px] object-top"
              loading="eager"
            />
          </div>
        </div>

        {/* --- SECTION 2: Doctor Profile (Jo miss ho gaya tha) --- */}
        {specialist && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-in slide-in-from-bottom duration-1000 delay-200">
            {/* Doctor Image (Left on Desktop) */}
            <div className="flex justify-center md:justify-start order-1">
              <img
                // Yahan doctor ki photo aayegi (Backend se ya Default)
                src={specialist.image || "/images/doctor.jpg"}
                alt={specialist.name}
                className="rounded-3xl shadow-lg w-full max-w-sm h-80 md:h-96 object-cover object-top border-4 border-white"
              />
            </div>

            {/* Doctor Bio (Right on Desktop) */}
            <div className="text-center md:text-left order-2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {specialist.name}
              </h2>
              <p className="text-xl text-green-600 font-semibold">
                {specialist.title}
              </p>
              <div className="h-1 w-20 bg-green-500 mx-auto md:mx-0 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                {specialist.bio}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Buttons */}
      <div className="fixed right-5 bottom-10 flex flex-col space-y-4 z-50">
        <a
          href="tel:+916299687357"
          className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 text-white transition transform hover:scale-110"
        >
          <FaPhoneAlt size={24} />
        </a>
        <a
          href="https://wa.me/+917091944667"
          className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 text-white transition transform hover:scale-110"
        >
          <FaWhatsapp size={26} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
