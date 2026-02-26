import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // ✅ Import Helmet
import PhysiotherapySection from "./Hero";
import ScrollableSection from "./scroll";
import Specializations from "./Specializations";
import QualityService from "./QualityService";
import BookAppointment from "./Book";
import PatientReviews from "./PatientReviews";

const Layouts = () => {
  // ✅ Switch (State) banaya
  const [triggerBooking, setTriggerBooking] = useState(false);

  return (
    <>
      <Helmet>
        <title>Best Physiotherapy in Patna & Gaya | Mirani Physio</title>
        <meta
          name="description"
          content="Expert physiotherapy services in Patna, Jehanabad and Gaya. Treat back pain, paralysis, and sports injuries with Dr. Aamash Mirani."
        />
      </Helmet>
      <div>
        {/* Hero ko remote diya (Button dabane ke liye) */}
        <PhysiotherapySection onBookNow={() => setTriggerBooking(true)} />

        <ScrollableSection />
        <Specializations />
        <QualityService />

        {/* Book ko signal bheja (Modal kholne ke liye) */}
        <BookAppointment
          triggerSignal={triggerBooking}
          resetSignal={() => setTriggerBooking(false)}
        />

        <PatientReviews />
      </div>
    </>
  );
};

export default Layouts;
