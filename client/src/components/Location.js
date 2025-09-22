import React, { useState, useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const mapImageUrl = '/images/map.jpg';

const locations = [
  {
    id: 1,
    city: 'Gaya',
    address: 'Mirani Physiotherapy center, White House Colony, Gaya - 823001',
    pinPosition: { top: '69.4%', left: '43.3%' },
  },
  {
    id: 2,
    city: 'Patna',
    address: 'Mirani Physiotherapy center, Kankarbagh, Patna - 800020',
    pinPosition: { top: '15.5%', left: '47.8%' },
  },
  {
    id: 3,
    city: 'Jahanabad',
    address: 'Chiksi, Himalaya Medical College, Jehanabad, Bihar',
    pinPosition: { top: '40.8%', left: '42.8%' },
  },
];

const LocationsSection = () => {
  const [hoveredLocationId, setHoveredLocationId] = useState(null);
  // ✅ Step 1: Create a ref to hold the timer
  const timeoutRef = useRef(null);

  // ✅ Step 2: Create handler functions with a delay
  const handleMouseEnter = (id) => {
    clearTimeout(timeoutRef.current); // Cancel any pending hide timer
    setHoveredLocationId(id);
  };

  const handleMouseLeave = () => {
    // Start a timer to hide the card after 300ms
    timeoutRef.current = setTimeout(() => {
      setHoveredLocationId(null);
    }, 300);
  };

  return (
    <div className="bg-gray-100 py-12 sm:py-16 px-4">
      <div className="text-center mb-5">
        <div className="inline-block bg-slate-700 text-white py-3 px-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold">Our Locations</h2>
          <p className="text-md text-gray-200">We Are Available Here</p>
        </div>
      </div>

      <div className="hidden md:block">
        <div
          className="max-w-6xl mx-auto rounded-2xl shadow-2xl relative overflow-hidden border-4 border-white"
          style={{
            backgroundImage: `url(${mapImageUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            aspectRatio: '1120 / 600',
            maxHeight: '68vh',
          }}
        >
          {locations.map((loc, index) => {
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`;
            
            const isVisible = hoveredLocationId === loc.id;
            const isRightSide = index % 2 !== 0; 

            const transformStyle = isRightSide
              ? `translateX(2rem) translateY(-80%)` 
              : `translateX(calc(-100% - 2rem)) translateY(-80%)`;
            
            return (
              // ✅ Step 3: Use the new handlers on the main wrapper div
              <div
                key={loc.id}
                className="absolute"
                style={{ top: loc.pinPosition.top, left: loc.pinPosition.left }}
                onMouseEnter={() => handleMouseEnter(loc.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Pin without Label */}
                <div className="relative z-20 cursor-pointer group flex flex-col items-center" style={{ transform: 'translate(-50%, -100%)' }}>
                  <FaMapMarkerAlt className="text-red-600 text-3xl drop-shadow-lg mx-auto transition-transform duration-300 group-hover:scale-125" />
                </div>
                
                {/* Info Card */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/1 z-30 w-64 p-4 rounded-xl shadow-2xl bg-slate-800/90 backdrop-blur-sm text-white transition-all duration-300 ease-in-out"
                  style={{
                    transform: isVisible ? transformStyle : `${transformStyle} scale(0.95)`,
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                >
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="text-lg mr-2 text-gray-300" />
                    <h3 className="font-bold text-xl text-white">{loc.city}</h3>
                  </div>
                  <p className="text-gray-200 text-sm">{loc.address}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile view remains unchanged */}
      <div className="block md:hidden">
        <div className="max-w-md mx-auto space-y-6">
          {locations.map((loc) => {
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`;
            return (
              <a
                key={loc.id}
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              >
                <div className="flex items-center mb-3">
                  <FaMapMarkerAlt className="text-xl mr-3 text-slate-600" />
                  <h3 className="font-bold text-2xl text-slate-800">{loc.city}</h3>
                </div>
                <p className="text-gray-600 text-base ml-2 pl-6 border-l-2 border-gray-200">
                  {loc.address}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;