import React from 'react'
import Navbar from './Header'
import PhysiotherapySection from './Hero'
import ScrollableSection from './scroll'
import Specializations from './Specializations'
import QualityService from './QualityService'
import BookAppointment from './Book'
import PatientReviews from './PatientReviews'
import Footer from './Footer'

const Layouts = () => {
  return (
    <div>
      
      <Navbar />
      <PhysiotherapySection/>
      <ScrollableSection/>
      <Specializations/>
      <QualityService/>
      <BookAppointment/>
      <PatientReviews/>
      <Footer/>
    </div>
  )
}

export default Layouts