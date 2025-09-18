import React from 'react'
import Navbar from '../../components/Layouts/Header'
import OrthopedicConditions from '../../components/Conditions/OrthopedicConditions'
import Footer from '../../components/Layouts/Footer'
const OrthopedicConditionsPage = () => {
  return (
    <div className='flex flex-col mt-16'>
        <Navbar/>
        <OrthopedicConditions/>
        <Footer/>
    </div>
  )
}

export default OrthopedicConditionsPage
