import React from "react";

const PhysiotherapySectionMobile = () => {
  return (
    <section className="bg-white py-10 overflow-x-hidden mt-20">
      {/* Top image (Div 1) */}
      <div className="w-full px-4">
        <img
          src="/images/image1.jpg"
          alt="Therapy session"
          className="w-full h-auto rounded-xl shadow-md "
        />
      </div>

      {/* Heading + Paragraph below image */}
      <div className="text-center max-w-full px-4 mt-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug mb-4">
          The Physiotherapy <br />
          <span className="text-sky-600">Specialist</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Physiotherapy is a science of movement and recovery. We treat body
          posture issues and pain & injuries without any drugs, surgery, or
          side effects. Our mission is to restore health and keep you moving
          with confidence.
        </p>
      </div>

      {/* Doctor info (Div 2) */}
      <div className="w-full flex flex-col items-center space-y-4 mt-8 px-4">
        <div className="w-full max-w-md h-100 overflow-hidden rounded-xl shadow-md">
        <img
          src="/images/doctor.jpg"
          alt="Doctor"
          className="w-full max-w-md h-full rounded-xl shadow-md object-cover object-top"
        />
        </div>
        <div className="text-center max-w-full space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Dr. Aamash Mirani
          </h2>
          <p className="text-base sm:text-lg text-sky-600 font-medium">
            Physiotherapist
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Pain Relief and Recovery with the best physiotherapy near you.
            ReLiva has a team of experienced and expert physiotherapists to keep
            you ahead. Effective treatments without surgery or drugs, tailored
            to your needs and lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapySectionMobile;
