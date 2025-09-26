import React, { useEffect, useState, useCallback, useRef } from "react";

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

const QualityService = () => {
  const [statsData, setStatsData] = useState([]);
  const [counts, setCounts] = useState([]);
  const hasAnimated = useRef(false); // <-- Badlav 1: Flag banaya

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/stats`);
        const data = await res.json();
        setStatsData(data);
        setCounts(data.map(() => 0));
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };
    fetchStats();
  }, []);

  const startCounting = useCallback(() => {
    statsData.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const stepTime = 20;
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
  }, [statsData]);

  // <-- Badlav 2: IntersectionObserver ke logic ko update kiya
  useEffect(() => {
    const section = document.getElementById("quality-service");
    if (!section || statsData.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          startCounting();
          hasAnimated.current = true; // Animation ko dobara chalne se roka
          observer.unobserve(section); // Observer ko hata diya
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    
    return () => {
      if(section) observer.unobserve(section);
    }
  }, [startCounting, statsData]);

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
            {statsData.map((stat, idx) => (
              <div key={stat._id || stat.id}>
                <h4 className="text-3xl font-bold">
                  {(counts[idx] || 0).toLocaleString()}+
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