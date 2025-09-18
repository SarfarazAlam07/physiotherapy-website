import React from 'react'
import Navbar from '../../components/Layouts/Header'
import AboutHeaders from '../../components/AboutHeader'
import VisionApproachSection from '../../components/Vission'
import PatientReviews from '../../components/Layouts/PatientReviews'
import LocationsSection from '../../components/Location'
import Footer from '../../components/Layouts/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHeaders/>
      <VisionApproachSection/>
      <PatientReviews/>
      <LocationsSection/>
      <Footer/>
    </div>
  )
}

export default About;