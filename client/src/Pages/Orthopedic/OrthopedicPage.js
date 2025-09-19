import React from 'react'
import Navbar from '../../components/Layouts/Header'
import Footer from '../../components/Layouts/Footer'
import OrthopedicSection from '../../components/Orthopedic'
import DifferenceSection from '../../components/DifferenceSection'
export const OrthopedicPage = () => {
  return (
    <div className='flex flex-col mt-16'>
        <Navbar/>
        <OrthopedicSection/>
        <DifferenceSection  />
        <Footer/>
    </div>
  )
}





// export default OrthopedicPage