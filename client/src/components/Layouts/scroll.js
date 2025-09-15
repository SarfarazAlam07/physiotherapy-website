import React, { useRef, useState, useEffect } from 'react';

const Card = ({ photo, heading, paragraph, isExpanded, onToggleExpand, isModalOpen }) => {
  // Get first 20 words for preview
  const words = paragraph.split(' ');
  const previewText = words.slice(0, 20).join(' ');
  const hasMoreWords = words.length > 20;

  if (isModalOpen) {
    return (
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
          {/* Image */}
          <div className="w-full h-48 mb-4">
            <img src={photo} alt={heading} className="w-full h-full object-cover rounded-md" />
          </div>
          
          {/* Title */}
          <div className="mb-4 text-center">
            <h4 className="text-xl font-semibold leading-tight">{heading}</h4>
          </div>
          
          {/* Full Content */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 leading-relaxed text-center">
              {paragraph}
            </p>
          </div>

          {/* Close Button */}
          <div className="text-center">
            <button
              onClick={onToggleExpand}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`card flex-shrink-0 w-[75vw] snap-center md:w-full md:max-w-xs bg-white rounded-lg shadow-lg p-6 
        transition-all duration-300 ease-in-out h-96 flex flex-col`}
    >
      {/* Image - Fixed height */}
      <div className="w-full h-40 mb-3">
        <img src={photo} alt={heading} className="w-full h-full object-cover rounded-md" />
      </div>
      
      {/* Title - Fixed height */}
      <div className="h-12 flex items-center justify-center mb-3 text-center">
        <h4 className="text-lg font-semibold leading-tight">{heading}</h4>
      </div>
      
      {/* Content area */}
      <div className="flex-1 flex flex-col justify-between min-h-0">
        <div className="overflow-hidden">
          <p className="text-sm text-gray-600 leading-relaxed text-center mb-3">
            {previewText + (hasMoreWords ? '...' : '')}
          </p>
        </div>

        {/* Button area - Always at bottom */}
        {hasMoreWords && (
          <div className="flex-shrink-0 text-center">
            <button
              onClick={onToggleExpand}
              className="text-blue-500 font-medium hover:text-blue-700 transition-colors text-sm"
            >
              Read More →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ScrollableSection = () => {
  const scrollContainerRef = useRef(null);
  const [cardsData, setCardsData] = useState([
    {
      id: 1,
      photo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      heading: "Posture & Ergonomics Physiotherapy",
      paragraph: "Posture & Ergonomics physiotherapy focuses on correcting postural imbalances and improving workplace ergonomics. Our specialized treatment addresses neck pain, back pain, and repetitive strain injuries caused by poor posture. We provide comprehensive assessments to identify postural problems and develop personalized treatment plans. Through targeted exercises, manual therapy, and ergonomic education, we help patients achieve better alignment and reduce pain. Our approach includes workplace assessments and recommendations for ergonomic improvements.",
      isExpanded: false
    },
    {
      id: 2,
      photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      heading: "Women's Health Physiotherapy",
      paragraph: "Women's Health Physiotherapy specializes in treating conditions unique to women throughout their lives. We address pelvic floor dysfunction, pregnancy-related pain, postpartum recovery, and menopausal changes. Our certified women's health physiotherapists provide confidential and compassionate care. Treatment includes pelvic floor rehabilitation, prenatal and postnatal exercise programs, and management of conditions like incontinence and pelvic organ prolapse. We create a comfortable environment where women can discuss sensitive health issues.",
      isExpanded: false
    },
    {
      id: 3,
      photo: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
      heading: "Post Operative Physiotherapy",
      paragraph: "Post Operative Physiotherapy helps patients recover safely and effectively after surgery. Our specialized programs are designed for various surgical procedures including orthopedic, cardiac, and neurological surgeries. We focus on pain management, wound healing, restoring mobility, and preventing complications. Treatment begins early in the recovery process to optimize healing and prevent adhesions or muscle weakness. Our evidence-based approach ensures faster recovery times and better functional outcomes for surgical patients.",
      isExpanded: false
    },
    {
      id: 4,
      photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      heading: "Neurological Physiotherapy",
      paragraph: "Neurological Physiotherapy specializes in treating patients with conditions affecting the nervous system. We work with individuals who have experienced stroke, spinal cord injuries, multiple sclerosis, Parkinson's disease, and other neurological conditions. Our treatment focuses on improving movement, balance, coordination, and functional independence. We use advanced techniques including gait training, balance exercises, and neuroplasticity-based interventions. Our goal is to maximize each patient's potential for recovery and improve their quality of life.",
      isExpanded: false
    },
    {
      id: 5,
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
      heading: "Paediatric Physiotherapy",
      paragraph: "Paediatric Physiotherapy provides specialized care for infants, children, and adolescents with developmental, neurological, or orthopedic conditions. We treat conditions such as cerebral palsy, developmental delays, sports injuries, and congenital disorders. Our child-friendly approach uses play-based therapy to engage young patients and make treatment enjoyable. We work closely with families to develop home exercise programs and provide education on supporting their child's development. Early intervention is key to achieving the best outcomes for children.",
      isExpanded: false
    },
  ]);

  const toggleCardExpand = (id) => {
    setCardsData(prevCardsData =>
      prevCardsData.map(card => {
        if (card.id === id) {
          return { ...card, isExpanded: !card.isExpanded };
        } else {
          return { ...card, isExpanded: false };
        }
      })
    );
  };

  // Close modal when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setCardsData(prevCardsData =>
          prevCardsData.map(card => ({ ...card, isExpanded: false }))
        );
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains('bg-opacity-50')) {
        setCardsData(prevCardsData =>
          prevCardsData.map(card => ({ ...card, isExpanded: false }))
        );
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardElement = scrollContainerRef.current.querySelector('.card');
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 16; 
        const scrollAmount = (cardWidth * 1) + gap;

        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardElement = scrollContainerRef.current.querySelector('.card');
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 16;
        const scrollAmount = (cardWidth * 1) + gap;

        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="bg-blue-200 py-10">
      <div className="container mx-auto px-4">
        {/* Main Heading & Description */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Specialised Physiotherapy Care</h2>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
            Physiotherapy provides effective treatment across physiotherapy specializations in various cities. Confirm with us the availability of physiotherapist in your nearby area.
          </p>
        </div>
        <div className="overflow-x-hidden">
          <div className="relative" style={{ minHeight: '450px' }}>
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg border border-gray-200 hidden md:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className=" scrollContainer flex overflow-x-auto gap-4 p-4 lg:p-0 scrollbar-hide snap-x md:justify-start md:gap-2 items-start"
            >
              {cardsData.map((card) => (
                <Card
                  key={card.id}
                  photo={card.photo}
                  heading={card.heading}
                  paragraph={card.paragraph}
                  isExpanded={card.isExpanded}
                  isModalOpen={card.isExpanded}
                  onToggleExpand={() => toggleCardExpand(card.id)}
                />
              ))}
            </div>
            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg border border-gray-200 hidden md:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableSection;