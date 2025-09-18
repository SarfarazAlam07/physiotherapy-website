import React from 'react';
// We'll use the map marker icon from react-icons
import { FaMapMarkerAlt } from 'react-icons/fa';

// ✨ IMPORTANT: Update this path to your actual map image
const mapImageUrl = '/images/map.jpg';

// Data for our locations. You can easily add more here!
// The positions are percentages (top, left, right) to work on different screen sizes.
const locations = [
  {
    id: 1,
    city: 'Patna',
    address: 'Mirani Physiotherapy center\nKankarbag patna - 800020',
    pinPosition: { top: '22%', left: '56%' },
    cardPosition: { top: '15%', right: '5%' },
  },
  {
    id: 2,
    city: 'Jahanabad',
    address: 'Mirani Physiotherapy center\nKankarbag patna - 804408',
    pinPosition: { top: '50%', left: '42%' },
    cardPosition: { top: '40%', left: '5%' },
  },
  {
    id: 3,
    city: 'Gaya',
    address: 'Mirani Physiotherapy center\nWhite House Colony Gaya - 823001',
    pinPosition: { top: '68%', left: '49%' },
    cardPosition: { top: '60%', right: '10%' },
  },
];

const LocationsSection = () => {
  return (
    <div className="bg-gray-100 py-12 sm:py-16 px-4">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-block bg-slate-700 text-white py-3 px-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold">Our Locations</h2>
          <p className="text-md text-gray-200">Where we are</p>
        </div>
      </div>

      {/* Map Container */}
      <div
        className="max-w-6xl mx-auto h-[450px] sm:h-[600px] rounded-2xl shadow-2xl relative overflow-hidden border-4 border-white"
        style={{
          backgroundImage: `url(${mapImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* We map over the locations array to create the pins and cards */}
        {locations.map((loc) => (
          <React.Fragment key={loc.id}>
            
            {/* The Red Pin */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ top: loc.pinPosition.top, left: loc.pinPosition.left }}
            >
              <FaMapMarkerAlt className="text-red-600 text-4xl drop-shadow-lg" />
            </div>
            
            {/* The Info Card */}
            <div
              className="absolute w-60 sm:w-64 p-4 rounded-xl shadow-lg bg-slate-800/70 backdrop-blur-sm text-white"
              style={{ 
                top: loc.cardPosition.top, 
                left: loc.cardPosition.left,
                right: loc.cardPosition.right 
              }}
            >
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-lg mr-2" />
                <h3 className="font-bold text-xl">{loc.city}</h3>
              </div>
              {/* whitespace-pre-line makes the '\n' in the address string work */}
              <p className="text-gray-200 whitespace-pre-line text-sm">{loc.address}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LocationsSection;