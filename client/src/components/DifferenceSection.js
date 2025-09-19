import React from "react";
import { Link } from "react-router-dom";
const DifferenceSection = () => {
  const data = [
    {
      id: 1,
      title: "The Mirani Difference",
      subtitle: "Mirani patients are achieving breakthrough results.",
      highlight: "Don't take our word for it! Hear it from them.",
      buttonText: "Patient Reviews",
      buttonLink: "#",
    },
  ];

  return (
    <>
    <section className="bg-gray-200 pt-12 pb-4 md:pt-16 md:pb-15 px-6 md:px-20 text-center">
      {data.map((item) => (
        <div key={item.id} className="max-w-2xl mx-auto space-y-4 md:space-y-6">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {item.title}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600">{item.subtitle}</p>

          {/* Highlight */}
          <p className="font-semibold text-gray-800">{item.highlight}</p>

          {/* Button */}
          <Link to='/patientreview'
          id="PatientReview"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-full transition"
          >
            PatientReview
          </Link>
        </div>
      ))}
    </section>
    <hr className="mt-auto w-1/2 h-1 border-transparent"/> 
    </>
  );
};

export default DifferenceSection;
