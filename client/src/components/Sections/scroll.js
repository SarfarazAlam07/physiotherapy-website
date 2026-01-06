import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import axiosClient from "../../api/axiosClient"; // ✅ Use centralized API

const ScrollableSection = () => {
  const [serviceData, setServicesData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Fetch Data using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosClient.get('/api/services');
        setServicesData(res.data);
      } catch (err) {
        console.error("API fetch failed:", err);
        setServicesData([]); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const finalCardsData = serviceData || [];
  const currentCard = finalCardsData[currentIndex];

  // ✅ Animation Logic
  const nextSlide = useCallback(() => {
    if (isAnimating || finalCardsData.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % finalCardsData.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, finalCardsData.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating || finalCardsData.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + finalCardsData.length) % finalCardsData.length
    );
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, finalCardsData.length]);

  // ✅ Auto Slide
  useEffect(() => {
    if (!showDetail && finalCardsData.length > 0) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, showDetail, nextSlide, finalCardsData.length]);

  // ✅ Body Scroll Lock
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

  // Helper for Carousel Positions
  const getItemPosition = (index) => {
    if (finalCardsData.length === 0) return {};
    
    const diff = (index - currentIndex + finalCardsData.length) % finalCardsData.length;
    const totalItems = finalCardsData.length;
    
    if (diff === 0)
      return { transform: "translateX(0) scale(1)", zIndex: 30, opacity: 1, filter: "blur(0px)" };
    if (diff === 1 || (diff === totalItems - 1 && totalItems <= 3))
      return { transform: "translateX(80%) scale(0.85)", zIndex: 20, opacity: 0.7, filter: "blur(2px)" };
    if (diff === totalItems - 1 || (diff === 1 && totalItems <= 3))
      return { transform: "translateX(-80%) scale(0.85)", zIndex: 20, opacity: 0.7, filter: "blur(2px)" };
    
    return {
      transform: diff < totalItems / 2 ? "translateX(150%) scale(0.6)" : "translateX(-150%) scale(0.6)",
      zIndex: 10, opacity: 0, filter: "blur(8px)",
    };
  };

  // 🛑 SAFETY CHECKS (CRITICAL FIX)
  if (isLoading) {
    return (
      <div className="min-h-[50vh] bg-gray-900 flex justify-center items-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  // Agar data khali hai, to crash mat karo, bas message dikhao
  if (!finalCardsData || finalCardsData.length === 0) {
    return (
      <div className="min-h-[50vh] bg-gray-900 flex justify-center items-center text-white">
        <p>No services available at the moment.</p>
      </div>
    );
  }

  // Agar currentCard undefined hai (rare case), to null return karo
  if (!currentCard) return null;

  // --- Main Render ---
  const carouselView = (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-green-600 to-blue-400 bg-clip-text text-transparent">
              Specialised Physiotherapy
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Physiotherapy provides effective treatment across specializations.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[350px] mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            {finalCardsData.map((card, index) => {
              const position = getItemPosition(index);
              const isActive = index === currentIndex;
              return (
                <div
                  key={card._id || index}
                  className="absolute w-80 h-96 transition-all duration-600 ease-out cursor-pointer"
                  style={{ ...position }}
                  onClick={() => !isAnimating && setCurrentIndex(index)}
                >
                  <div className="w-full h-full bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:border-white/40 transition-all duration-300">
                    <div className="w-full h-44 overflow-hidden">
                      {/* ✅ Safe Image Access */}
                      <img
                        src={card.image || "/images/image1.png"} 
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-4 h-52 flex flex-col text-white">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-green-600/20 text-green-300 text-xs font-semibold rounded-full uppercase tracking-wide mb-1">
                          {card.topic}
                        </span>
                        <h3 className="text-lg font-bold text-white truncate">
                          {card.title}
                        </h3>
                      </div>
                      {isActive && (
                        <>
                          <p className="text-gray-300 text-sm mb-3 leading-relaxed line-clamp-2">
                            {card.description}
                          </p>
                          <div className="flex justify-center mt-auto mb-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDetail(true);
                              }}
                              className="px-4 py-2 bg-green-600/30 hover:bg-green-600 rounded-lg text-white font-semibold text-sm transition-all"
                            >
                              Read More
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all disabled:opacity-50"
          >
            ←
          </button>
          <div className="flex gap-2">
            {finalCardsData.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-green-500 scale-125" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );

  // --- Detail Modal ---
  const detailViewContent = (
    <div className="fixed inset-0 bg-slate-900 z-50 overflow-y-auto min-h-screen p-4 md:p-10">
      <div className="max-w-6xl mx-auto bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="h-64 lg:h-auto relative">
             <img
                src={currentCard.image || "/images/image1.png"}
                alt={currentCard.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:hidden"></div>
          </div>
          <div className="p-8 md:p-12 text-white space-y-6">
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm">
              {currentCard.topic}
            </span>
            <h2 className="text-4xl font-bold">{currentCard.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentCard.fullDescription || currentCard.description}
            </p>
            
            {currentCard.specs && (
              <div className="grid grid-cols-2 gap-4 mt-8">
                 {Object.entries(currentCard.specs).map(([key, value]) => (
                    <div key={key} className="bg-slate-700/50 p-4 rounded-xl">
                      <p className="text-gray-400 text-xs uppercase">{key}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                 ))}
              </div>
            )}
            
            <button 
              onClick={() => setShowDetail(false)}
              className="mt-8 px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-200 transition"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (showDetail) {
    // Portal check (ensure modal-root exists in index.html, else render directly)
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) {
      return ReactDOM.createPortal(detailViewContent, modalRoot);
    }
    return detailViewContent;
  }

  return carouselView;
};

export default ScrollableSection;