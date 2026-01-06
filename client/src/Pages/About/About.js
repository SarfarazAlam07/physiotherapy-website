import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ Import
import AboutHeaders from "../../components/AboutHeader";
import VisionApproachSection from "../../components/Vission";
import PatientReviews from "../../components/Sections/PatientReviews";
import LocationsSection from "../../components/Location";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Mirani Physiotherapy</title>
        <meta
          name="description"
          content="Learn about our vision, approach, and expert team of physiotherapists dedicated to your recovery."
        />
      </Helmet>
      <AboutHeaders />
      <VisionApproachSection />
      <PatientReviews />
      <LocationsSection />
    </div>
  );
};

export default About;
