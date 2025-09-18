// QualityService.jsx
import React, { useEffect, useState } from "react";

const features = [
  {
    title: "Expert Physiotherapist",
    desc: "Team certified & trained in latest advanced physio techniques",
  },
  {
    title: "Highly Rated",
    desc: "+4.9 Star Rating for quality physiotherapy care and service",
  },
  {
    title: "Unique Approach",
    desc: "Mirani patients are achieving breakthrough results",
  },
  {
    title: "Personalized Care",
    desc: "Unique treatment for your specific ailment",
  },
  {
    title: "Right Infrastructure",
    desc: "World-class equipment and modern modalities",
  },
];

const stats = [
  { id: 1, value: 1000, label: "Happy Patients" },
  { id: 2, value: 5, label: "Experience" },
  { id: 3, value: 3, label: "Cities" },
];

const QualityService = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  const startCounting = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500; // 1.5 sec animation
      const stepTime = 20;   // update every 20ms

      // step calculate (minimum 1 rakha)
      const increment = Math.max(1, Math.ceil(end / (duration / stepTime)));

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
      }, stepTime);
    });
  };

  useEffect(() => {
    const section = document.getElementById("quality-service");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting(); // enter → start counting
        } else {
          setCounts(stats.map(() => 0)); // exit → reset
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="quality-service"
      className="bg-slate-700 text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Quality Physiotherapy Service</h2>
          <p className="text-lg font-medium mt-4 md:mt-0">
            In 5 years, we have seen an overwhelming response to our treatment
          </p>
        </div>

        {/* Features + Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Why patients name Mirani the best physiotherapy
            </h3>
            <ul className="space-y-4">
              {features.map((item, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="font-semibold">• {item.title} :</span>
                  <span className="text-gray-200">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={stat.id}>
                <h4 className="text-3xl font-bold">
                  {counts[idx].toLocaleString()}+
                </h4>
                <p className="text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityService;
