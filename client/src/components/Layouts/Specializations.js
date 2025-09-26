// Specializations.jsx
import React from "react";
// icons ke liye react-icons ya lucide-react use kar sakte ho
import { MapPin, Home, Laptop, ArrowRight } from "lucide-react";

const Specializations = () => {
  // Ye array future me backend se aa sakta hai
  const cards = [
    {
      id: 1,
      title: "Physiotherapy Near Me",
      desc: "Go for result-oriented physiotherapy at a fully-equipped Mirani physiotherapy clinic nearby in your own locality.",
      icon: <MapPin className="w-10 h-10 text-blue-600" />,
      link: "/Location", // internal link
    },
    {
      id: 2,
      title: "Physiotherapy at Home",
      desc: "Recover with expert physiotherapy at home conveniently with a home visit physiotherapist.",
      icon: <Home className="w-10 h-10 text-green-600" />,
      link: "/orthopedic", // internal link
    },
    {
      id: 3,
      title: "Online Physiotherapy",
      desc: "See a Physio online, so you need not come to clinic! Tele Physiotherapy which is Effective, Convenient & Safe.",
      icon: <Laptop className="w-10 h-10 text-purple-600" />,
      link: `https://wa.me/+917091944667?text=Hello,%20I%20want%20to%20book%20an%20appointment`, // internal link
    },
  ];

  // Link handle karne ke liye function
  const handleCardClick = (link) => {
     if (link.startsWith('http') || link.startsWith('https://wa.me')) {
    window.open(link, '_blank'); // All external links new tab mein
  } else {
    window.location.href = link; // Internal links same tab mein
  }
  };

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          World-Class Physiotherapy at Online
        </h2>
        <p className="text-gray-600">Choose what works for you!</p>
      </div>

      {/* Cards Map */}
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.link)}
            className="bg-white border border-gray-200 rounded-xl p-6 w-full md:w-80 shadow-sm
                       hover:bg-green-100 hover:shadow-lg transition-all duration-300 
                       cursor-pointer transform hover:scale-105 group"
          >
            <div className="mb-4 flex justify-between items-center">
              {card.icon}
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specializations;