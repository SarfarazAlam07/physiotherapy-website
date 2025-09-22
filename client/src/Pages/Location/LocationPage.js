import React from 'react'
import Navbar from '../../components/Layouts/Header'
import LocationsSection from '../../components/Location'
import Footer from '../../components/Layouts/Footer'
const LocationPage = () => {
  return (
    <div className='flex flex-col mt-12'>
        <Navbar/>
        <LocationsSection/>
        <Footer/>
    </div>
  )
}

export default LocationPage