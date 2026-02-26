import React from "react";
import OrthopedicSection from "../../components/Orthopedic";
import DifferenceSection from "../../components/DifferenceSection";
export const OrthopedicPage = () => {
  return (
    <div className="flex flex-col mt-16">
      <OrthopedicSection />
      <DifferenceSection />
    </div>
  );
};

export default OrthopedicPage
