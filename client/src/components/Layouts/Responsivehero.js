import React from "react";
import PhysiotherapySection from "./Hero";
import PhysiotherapySectionMobile from "./Heromobile";

const ResponsivePhysiotherapy = () => {
  return (
    <>
      {/* Desktop version: hidden on mobile, shown on md+ */}
      <div className="hidden md:block">
        <PhysiotherapySection />
      </div>

      {/* Mobile version: shown on mobile, hidden on md+ */}
      <div className="block md:hidden">
        <PhysiotherapySectionMobile />
      </div>
    </>
  );
};

export default ResponsivePhysiotherapy;
