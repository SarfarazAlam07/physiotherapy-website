import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

const ScrollableSection = ({ cardsData = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
   const truncateWords = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  };
  const defaultCardsData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop",
      title: "Posture & Ergonomics",
      topic: "Physiotherapy",
      description:
        "Specialized treatment addressing neck pain, back pain, and repetitive strain injuries caused by poor posture.",
      fullDescription:
        "Posture & Ergonomics physiotherapy focuses on correcting postural imbalances and improving workplace ergonomics. Our specialized treatment addresses neck pain, back pain, and repetitive strain injuries caused by poor posture. We provide comprehensive assessments to identify postural problems and develop personalized treatment plans.",
      specs: {
        "Session Time": "45 mins",
        Equipment: "Advanced",
        Approach: "Holistic",
        "Follow-up": "Weekly",
        Results: "Proven",
      },
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop",
      title: "Women's Health",
      topic: "Physiotherapy",
      description:
        "Specialized care for women throughout their lives, addressing pelvic floor dysfunction and pregnancy-related pain.",
      fullDescription:
        "Women's Health Physiotherapy specializes in treating conditions unique to women throughout their lives. We address pelvic floor dysfunction, pregnancy-related pain, postpartum recovery, and menopausal changes. Our certified women's health physiotherapists provide confidential and compassionate care.",
      specs: {
        "Session Time": "50 mins",
        Expertise: "Certified",
        Privacy: "Assured",
        Programs: "Custom",
        Care: "Holistic",
      },
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop",
      title: "Post Operative",
      topic: "Recovery",
      description:
        "Safe and effective recovery programs after surgery, focusing on pain management and restoring mobility.",
      fullDescription:
        "Post Operative Physiotherapy helps patients recover safely and effectively after surgery. Our specialized programs are designed for various surgical procedures including orthopedic, cardiac, and neurological surgeries. We focus on pain management, wound healing, and restoring mobility.",
      specs: {
        Recovery: "Fast",
        Monitoring: "24/7",
        Techniques: "Modern",
        Support: "Complete",
        Outcomes: "Superior",
      },
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      title: "Neurological",
      topic: "Therapy",
      description:
        "Specialized treatment for nervous system conditions including stroke and spinal cord injuries.",
      fullDescription:
        "Neurological Physiotherapy specializes in treating patients with conditions affecting the nervous system. We work with individuals who have experienced stroke, spinal cord injuries, multiple sclerosis, Parkinson's disease, and other neurological conditions.",
      specs: {
        Expertise: "Advanced",
        Technology: "Latest",
        Recovery: "Optimal",
        Support: "Family",
        Results: "Proven",
      },
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      title: "Paediatric",
      topic: "Care",
      description:
        "Child-friendly physiotherapy for infants, children, and adolescents with developmental conditions.",
      fullDescription:
        "Paediatric Physiotherapy provides specialized care for infants, children, and adolescents with developmental, neurological, or orthopedic conditions. We treat conditions such as cerebral palsy, developmental delays, sports injuries, and congenital disorders.",
      specs: {
        "Age Group": "0-18 yrs",
        Approach: "Play-based",
        Environment: "Friendly",
        Programs: "Custom",
        Support: "Family",
      },
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
      title: "Sports Medicine",
      topic: "Rehabilitation",
      description:
        "Athletic injury prevention and rehabilitation programs for sports professionals and fitness enthusiasts.",
      fullDescription:
        "Sports Medicine Physiotherapy focuses on preventing and treating sports-related injuries. We work with athletes at all levels to optimize performance, prevent injuries, and facilitate safe return to sport after injury.",
      specs: {
        Athletes: "All levels",
        Prevention: "Priority",
        Recovery: "Rapid",
        Performance: "Enhanced",
        Experience: "Expert",
      },
    },
  ];

  const finalCardsData = cardsData.length > 0 ? cardsData : defaultCardsData;

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % finalCardsData.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, finalCardsData.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + finalCardsData.length) % finalCardsData.length
    );
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, finalCardsData.length]);

  const getItemPosition = (index) => {
    const diff = (index - currentIndex + finalCardsData.length) % finalCardsData.length;
    const totalItems = finalCardsData.length;
    if (diff === 0)
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "blur(0px)",
      };
    if (diff === 1 || (diff === totalItems - 1 && totalItems <= 3))
      return {
        transform: "translateX(80%) scale(0.85)",
        zIndex: 20,
        opacity: 0.7,
        filter: "blur(2px)",
      };
    if (diff === totalItems - 1 || (diff === 1 && totalItems <= 3))
      return {
        transform: "translateX(-80%) scale(0.85)",
        zIndex: 20,
        opacity: 0.7,
        filter: "blur(2px)",
      };
    return {
      transform: diff < totalItems / 2 ? "translateX(150%) scale(0.6)" : "translateX(-150%) scale(0.6)",
      zIndex: 10,
      opacity: 0,
      filter: "blur(8px)",
    };
  };

  const currentCard = finalCardsData[currentIndex];

  useEffect(() => {
    if (!showDetail) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, showDetail, nextSlide]);

  useEffect(() => {
    if (showDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDetail]);

  const carouselView = (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* background blur circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* heading */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-green-600 to-blue-400 bg-clip-text text-transparent">
              Specialised Physiotherapy
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Physiotherapy provides effective treatment across physiotherapy
            specializations in various cities. Confirm with us the availability
            of physiotherapist in your nearby area.
          </p>
        </div>

        {/* carousel */}
        <div className="relative h-[350px] mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            {finalCardsData.map((card, index) => {
              const position = getItemPosition(index);
              const isActive = index === currentIndex;
              return (
                <div
                  key={card.id}
                  className="absolute w-80 h-96 transition-all duration-600 ease-out cursor-pointer"
                  style={{ ...position }}
                  onClick={() => !isAnimating && setCurrentIndex(index)}
                >
                  <div className="w-full h-full bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:border-white/40 transition-all duration-300">
                    <div className="w-full h-44 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-4 h-52 flex flex-col text-white">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-green-600/20 text-green-300 text-xs font-semibold rounded-full uppercase tracking-wide mb-1">
                          {card.topic}
                        </span>
                        <h3 className="text-lg font-bold text-white">
                          {card.title}
                        </h3>
                      </div>
                      {isActive && (
                        <>
                          <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                             {truncateWords(card.description, 13)}
                          </p>
                          <div className="flex justify-center mt-auto mb-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDetail(true);
                              }}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/30 hover:bg-blue-600/50 rounded-lg text-green-300 hover:text-white font-semibold text-sm transition-all duration-300 group border border-green-400/30"
                            >
                              <span>Read More</span>
                              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                                →
                              </span>
                            </button>
                          </div>
                        </>
                      )}
                      {!isActive && (
                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-center">
                            <h4 className="text-lg font-semibold">
                              {card.title}
                            </h4>
                            <p className="text-green-300 text-sm">
                              {card.topic}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex gap-2">
            {finalCardsData.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-green-500 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  // ▼▼ Detail View Content ▼▼
  const detailViewContent = (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-y-auto overflow-x-hidden z-50 min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[80vh]">
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-xl opacity-50 scale-110"></div>
              <img
                src={currentCard.image}
                alt={currentCard.title}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-white/10"
              />
            </div>
          </div>
          <div className="space-y-6 sm:space-y-8 text-white text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                {currentCard.topic}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                {currentCard.title}
              </h1>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {currentCard.fullDescription}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {Object.entries(currentCard.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <p className="text-gray-400 text-xs sm:text-sm font-medium">
                    {key}
                  </p>
                  <p className="text-white font-semibold sm:font-bold mt-1 text-sm sm:text-base">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ▼▼ Mobile Back Button (top-left) ▼▼
  const mobileBackButton = (
    <button
      onClick={() => setShowDetail(false)}
      className="fixed top-4 left-4 z-[60] flex sm:hidden 
                 w-10 h-10 rounded-full bg-black/40 
                 border border-white/20 backdrop-blur-md 
                 items-center justify-center 
                 text-white hover:bg-black/60 
                 transition-all duration-300 shadow-lg"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );

  // ▼▼ Desktop Back Button (bottom-right) ▼▼
  const desktopBackButton = (
    <button
      onClick={() => setShowDetail(false)}
      className="hidden sm:flex fixed bottom-8 right-8 z-[60] 
                 bg-white/10 backdrop-blur-md border border-white/20 
                 px-6 py-3 sm:px-8 sm:py-4 rounded-full 
                 text-white font-semibold hover:bg-white/20 
                 transition-all duration-300 shadow-lg items-center gap-2"
    >
      <span>Back</span>
      <span className="transform rotate-180">→</span>
    </button>
  );

  if (showDetail) {
    return ReactDOM.createPortal(
      <>
        {detailViewContent}
        {mobileBackButton}
        {desktopBackButton}
      </>,
      document.getElementById("modal-root")
    );
  }

  return carouselView;
};

export default ScrollableSection;
