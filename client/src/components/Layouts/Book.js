import React, { useState, useEffect } from "react";

const BookAppointment = () => {
  const [showButton, setShowButton] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // thoda scroll hote hi button show
        setShowButton(true);
      } else {
        // upar aa jaye to hide
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Button - center bottom */}
      {showButton && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="bg-blue-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Book Appointment
          </button>
        </div>
      )}

      {/* Right Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 relative h-full flex flex-col">
          <h3 className="text-xl font-bold mb-4">Book Appointment</h3>

          <form className="space-y-4 flex-1 overflow-y-auto">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border rounded-md"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>

          {/* Close Button */}
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}
    </>
  );
};

export default BookAppointment;
