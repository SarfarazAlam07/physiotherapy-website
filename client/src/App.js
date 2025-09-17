import React from 'react'
import Layouts from './components/Layouts/Layouts'
import Navbar from './components/Layouts/Header'
import PhysiotherapySection from './components/Layouts/Hero'
import ScrollableSection from './components/Layouts/scroll'
import Specializations from './components/Layouts/Specializations'
import QualityService from './components/Layouts/QualityService'
import Footer from './components/Layouts/Footer'
import BookAppointment from './components/Layouts/Book'
import PatientReviews from './components/Layouts/PatientReviews'
const App = () => {
  return (
    <div className=''>
      
      <Navbar/>
      <Layouts/>
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

export default App