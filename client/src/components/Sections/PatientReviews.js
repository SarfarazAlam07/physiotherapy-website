import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // 1. नए आइकॉन इम्पोर्ट किए गए

// --- DATA ---
// (टेस्ट करने के लिए, मैंने पहले रिव्यू की रेटिंग 4.5 कर दी है)
const reviewsData = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/150?u=rohit',
    initial: null,
    name: 'Sʌʜɩɭ Kʋɱʌʀ',
    location: 'Chapra',
    rating: 5, // <-- बदला हुआ रेटिंग
    tag: {
      text: 'Friendly & Strict At The Same Time',
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
    },
    reviewText: "Arguably the best physiotherapist in the town. Dr. Ankita was friendly and strict at the same time...",
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/150?u=ankit',
    initial: null,
    name: 'Ankit Barthwal',
    location: 'Bengaluru',
    rating: 3,
    tag: {
      text: 'Very Specific Treatment',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
    },
    reviewText: "The level of detailed diagnosis is really amazing. Dr Asha really helped me in finding the root cause of my knee pain...",
  },
   {
    id: 3,
    avatar: null,
    initial: 'A',
    name: 'Anhul Patel',
    location: 'Mumbai',
    rating: 2.5,
    tag: {
      text: 'Incredibly Attentive & Knowledgeable',
      bgColor: 'bg-teal-100',
      textColor: 'text-teal-800',
    },
    reviewText: "Great place to recover faster and better 👍. After an accident and wrist surgery I needed to heat faster, so I could start my sketching work again ( I'm a designer). I had the pleasure of working with fantastic physiotherapists. They were incredibly attentive and knowledgeable. They took the time to understand my specific needs.",
  },
    {
    id: 4,
    avatar: 'https://i.pravatar.cc/150?u=sunita',
    initial: null,
    name: 'Sunita Sharma',
    location: 'Delhi',
    rating: 3.5,
    tag: {
      text: 'Life Changing Experience',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-800',
    },
    reviewText: "I had been suffering from chronic back pain for years. The team at Mirani not only helped with the pain but also taught me exercises to prevent it in the future. Their approach is holistic and very effective. Highly recommended for anyone looking for long-term relief.",
  },
  // ... बाकी रिव्यूज
];


// --- नया रेटिंग कंपोनेंट ---
// यह कंपोनेंट रेटिंग के आधार पर सही सितारे दिखाता है
const Rating = ({ rating }) => {
  return (
    <div className="flex items-center text-yellow-400">
      {Array.from({ length: 5 }).map((_, index) => {
        const starNumber = index + 1;
        if (rating >= starNumber) {
          // भरा हुआ सितारा
          return <FaStar key={index} />;
        } else if (rating >= starNumber - 0.5) {
          // आधा सितारा
          return <FaStarHalfAlt key={index} />;
        } else {
          // खाली सितारा
          return <FaRegStar key={index} className="text-gray-300" />;
        }
      })}
    </div>
  );
};


// --- MAIN COMPONENT ---
const PatientReviews = () => {
  return (
    <section className="bg-gray-50 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">The Mirani Difference</h2>
          <p className="mt-2 text-lg text-gray-600">
            Mirani patients are achieving breakthrough results
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="flex gap-3 overflow-x-auto pb-6 scroll-container">
          {reviewsData.map((review) => (
            <div key={review.id} className="flex-shrink-0 w-[300px] bg-white border border-gray-500 rounded-xl shadow-md p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  {review.avatar ? (
                    <img className="w-12 h-12 rounded-full object-cover" src={review.avatar} alt={review.name} />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-gray-600">{review.initial}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                    {/* नए Rating कंपोनेंट का उपयोग */}
                    <div className="mt-2">
                        <Rating rating={review.rating} />
                    </div>
                  </div>
                </div>
                <FcGoogle size={24} />
              </div>

              {/* Tag */}
              <div className={`mt-4 px-3 py-1 text-xs font-medium rounded-full self-start ${review.tag.bgColor} ${review.tag.textColor}`}>
                {review.tag.text}
              </div>

              {/* Review Text */}
              <div className="mt-4 text-gray-700 text-sm overflow-y-auto h-32 pr-2 review-scrollbar">
                {review.reviewText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientReviews;