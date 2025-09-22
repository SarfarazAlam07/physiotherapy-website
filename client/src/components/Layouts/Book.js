import React, { useState, useEffect } from "react";
import AppointmentForm from "./AppointmentForm";

const BookAppointment = () => {
  const [showButton, setShowButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Assuming you have a footer with id="footer"
      const footer = document.getElementById("footer");
      const footerTop = footer?.getBoundingClientRect().top;

      if (window.scrollY > 50) {
        if (footerTop && footerTop <= window.innerHeight) {
          setShowButton(false);
        } else {
          setShowButton(true);
        }
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => {
    setShowButton(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowButton(true);
  };

  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Appointment booked successfully!");
    closeModal();
  };

  return (
    <>
      {/* Book Appointment Button */}
      {showButton && !isModalOpen && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={openModal}
            // ✅ This line has been updated for better mobile styling
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 text-sm sm:px-8 sm:py-3 font-semibold rounded-full shadow-xl hover:scale-105 transition transform"
          >
            Book an Appointment
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          ></div>

          {/* Centered Form */}
          <div className="fixed inset-0 flex items-start justify-center z-50 px-4 pt-30 sm:pt-24">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative transition-transform transform scale-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Book an Appointment
              </h3>

              <AppointmentForm onSubmit={handleFormSubmit} />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookAppointment;