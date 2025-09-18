import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const OrthopedicConditions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const conditions = [
    { id: 1, title: "Knee Pain Conditions" },
    { id: 2, title: "Ankle & Foot Pain Conditions" },
    { id: 3, title: "Neck Pain Conditions" },
    { id: 4, title: "Hip and Leg Pain Conditions" },
    { id: 5, title: "Shoulder Pain Conditions" },
    { id: 6, title: "Hand & Wrist Pain Conditions" },
    { id: 7, title: "Back Pain Conditions" },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 px-4 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
        Orthopedic Conditions
      </h2>

      {/* Grid layout 2 columns with flexible height */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {conditions.map((item, index) => (
          <div
            key={item.id}
            className={`border rounded-md cursor-pointer transition-colors duration-200 ${
              openIndex === index ? "bg-gray-100" : "bg-gray-50"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {/* Accordion Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="font-semibold text-gray-700">{item.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-green-700 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Accordion Body */}
            {openIndex === index && (
              <div className="px-4 pb-3 text-sm text-gray-600">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vel sem sit amet purus malesuada gravida.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrthopedicConditions;
