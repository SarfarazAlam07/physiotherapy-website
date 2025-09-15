import React from "react";
const PhysiotherapySection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 space-y-16 mt-10 overflow-x-hidden">
      {/* Row 1: Paragraph + Wide Image */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Paragraph */}
        <div className="flex-1 text-gray-600 leading-relaxed max-w-xl">
        
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
          
            The Physiotherapy
            <br /> <span className="text-sky-600">Specialist</span>
          </h1>
          <p>
            Physiotherapy is a science of movement and recovery. We treat body
            posture issues and pain & injuries without any drugs, surgery, or
            side effects. Our mission is to restore health and keep you moving
            with confidence.
          </p>
        </div>
        {/* Right: Wide Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/image1.jpg"
            alt="Therapy session"
            className="rounded-xl shadow-md w-96 h-48 object-cover"
          />
        </div>
      </div>
      {/* Row 2: Tall Image + Paragraph */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left: Tall Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/doctor.jpg"
            alt="Doctor"
            className="rounded-xl shadow-md w-48 h-80 object-cover"
          />
        </div>{" "}
        {/* Right: Paragraph */}
        <div className="flex-1 flex justify-end">
          <div className="flex-1 text-gray-600 leading-relaxed max-w-xl space-y-4 flex flex-col justify-start">
            <h2 className="text-3xl font-bold text-gray-900 ">
              Dr. Aamash Mirani
            </h2>
            <p className="text-lg text-sky-600 font-medium ">Physiotherapist</p>
            <p>
              Pain Relief and Recovery with the best physiotherapy near you.
              ReLiva has a team of experienced and expert physiotherapists to
              keep you ahead. Effective treatments without surgery or drugs,
              tailored to your needs and lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhysiotherapySection;
