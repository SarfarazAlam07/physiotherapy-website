import React from 'react';
// ✨ Step 1: Import the icons you want to use
import { FaEye, FaCheckCircle } from 'react-icons/fa';

const VisionApproachSection = () => {
  return (
    // Main container for both sections, setting padding and background
    <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      
      {/* Our Vision Card */}
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8 border-t-4 border-blue-500">
        <div className="flex items-center mb-4">
          {/* ✨ Step 2: Replace the emoji with the imported icon component */}
          <FaEye className="text-blue-600 text-3xl mr-4" /> 
          <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Mirani is focused on being a preferred partner of choice to other Healthcare Providers for their physiotherapy requirements.
        </p>
      </div>

      {/* Our Approach Card */}
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 border-t-4 border-blue-500">
        <div className="flex items-center mb-4">
          {/* ✨ Step 2: Replace the emoji with the imported icon component */}
          <FaCheckCircle className="text-blue-600 text-3xl mr-4" /> 
          <h2 className="text-3xl font-bold text-gray-800">Our Approach</h2>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our approach to your recovery is what makes us <span className="font-bold">UNIQUE</span>. We believe in involving you in your treatment. That is why we educate you about your physical condition, its causes and effects. We determine your current level of functionality and your expected goals. Together, we set out a plan for achieving and maintaining those goals making it the treatment that works best for you.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          It is a joint process - WE bring the <span className="font-bold">EXPERTISE</span>; YOU commit and follow through with <span className="font-bold">IMPLEMENTATION</span>. The end result is that you recover and get back to your life; and take ownership of your physical health too.
        </p>
      </div>

    </div>
  );
};

export default VisionApproachSection;