import React from 'react'
import Layouts from './components/Layouts/Layouts'
import Navbar from './components/Layouts/Header'
import ResponsivePhysiotherapy from "./components/Layouts/Responsivehero"
import ScrollableSection from './components/Layouts/scroll'
import BookAppointment from './components/Layouts/Book'
const App = () => {
  return (
    <div className=''>
      
      <Navbar/>
      <Layouts/>
      <ResponsivePhysiotherapy/>
      <ScrollableSection/>
      <BookAppointment/>
    </div>
  )
}

export default App