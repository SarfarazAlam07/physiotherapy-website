import React, { useState, useEffect } from "react";
import AppointmentForm from "./AppointmentForm";

// ✅ Props receive kiya: triggerSignal, resetSignal
const BookAppointment = ({ triggerSignal, resetSignal }) => {
  const [showButton, setShowButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1️⃣ Signal Watcher: Jab Hero button dabega, ye chalega
  useEffect(() => {
    if (triggerSignal) {
      setIsModalOpen(true);
      setShowButton(false);
      if (resetSignal) resetSignal(); // Switch wapas band kar do taaki dobara daba sakein
    }
  }, [triggerSignal, resetSignal]);

  // 2️⃣ Scroll Logic (Floating button ke liye)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
          setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3️⃣ Body Scroll Lock
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isModalOpen]);


  const openModal = () => {
    setShowButton(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowButton(true);
  };

  const handleFormSubmit = () => {
    closeModal();
  };

  return (
    <>
      {/* Floating Bottom Button */}
      {showButton && !isModalOpen && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-in slide-in-from-bottom-4">
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 text-sm sm:text-base font-bold rounded-full shadow-2xl hover:scale-105 transition transform border-2 border-white/20"
          >
            Book Appointment
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <>
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300"
          ></div>

          <div className="fixed inset-0 flex items-center justify-center z-[70] px-4 pointer-events-none">
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative transition-transform transform scale-100 pointer-events-auto max-h-[90vh] flex flex-col">
              
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  Book Appointment
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 transition"
                >
                  ✕
                </button>
              </div>

              <AppointmentForm onSubmit={handleFormSubmit} setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookAppointment;