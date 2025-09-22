import React from "react";

const AboutHeaders = ({ data }) => {
  return (
    <section className="bg-[#244a56] py-10 px-6 md:px-20 text-white relative z-10 mt-24">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={data.image}
            alt={data.heading}
            className="
              rounded-3xl shadow-lg
              w-[300px] h-[300px]       
              md:w-[400px] md:h-[380px] 
              lg:w-[500px] lg:h-[420px] 
              object-cover object-top
            "
          />
        </div>

        {/* Right: Text + Features */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">{data.heading}</h2>
          <p className="text-base md:text-lg leading-relaxed">
            {data.paragraph}
          </p>

          {/* Features in 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-green-400 text-lg">✔</span>
                <p className="text-sm md:text-base">{feature}</p>
              </div>
            ))}
          </div>

          {/* Note (optional) */}
          {data.note && (
            <p className="mt-2 text-sm md:text-base font-medium">{data.note}</p>
          )}
        </div>
      </div>
    </section>
  );
};

// Example usage with sample data
const sampleData = {
  image: "./images/doctor.jpg",
  heading: "Md Aamash Mirani",
  paragraph:
    "Mirani Physiotherapy is a physiotherapy specialist with a wide network of physiotherapy clinics, outsourced physiotherapy for hospitals and home visit physios.",
  features: [
    "Team of Expert Physiotherapist",
    "ISO certified",
    "Unique approach to recovery",
    "Full Spectrum: Clinic & Hospital, Home, Online",
    "Advanced techniques and robotics",
    "Evidence based practice",
    "Exercise as Medicine",
    "Education to Empower patients",
    "Result-oriented treatment",
    "Trusted Recovery partner",
  ],
  note: "Our thrust is that you not only recover but also get back to your pre-injury activity levels and begin to Live your Life Again!",
};

export default function App() {
  return <AboutHeaders data={sampleData} />;
}
