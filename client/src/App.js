import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layouts from './components/Layouts/Layouts'
import About from './Pages/About/About'
import Location from './Pages/Location/LocationPage'
import PatientReview from './Pages/PatientReview/PatientReviewPage'
import OrthopedicConditions from './components/OrthopedicConditions'
const App = () => {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path="/" element={<Layouts />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/patientreview" element={<PatientReview />} />
          <Route path="/OrthopedicConditions" element={<OrthopedicConditions />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App