import React from 'react'
import Navbar from '../../components/Layouts/Header'
import PatientReviews from '../../components/Layouts/PatientReviews'
import Footer from '../../components/Layouts/Footer'
const PatientReviewPage = () => {
  return (
    <div className='flex flex-col mt-16'>
        <Navbar/>
        <PatientReviews/>
        <Footer/>
    </div>
  )
}

export default PatientReviewPage