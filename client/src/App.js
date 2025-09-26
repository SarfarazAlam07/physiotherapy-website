import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import Layouts from "./components/Layouts/Layouts";
import About from "./Pages/About/About";
import Location from "./Pages/Location/LocationPage";
import PatientReview from "./Pages/PatientReview/PatientReviewPage";
import { OrthopedicPage } from "./Pages/Orthopedic/OrthopedicPage";
import NotFoundPage from "./Pages/PageNotFound/PageNotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layouts />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/patientreview" element={<PatientReview />} />
        <Route path="/Orthopedic" element={<OrthopedicPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </BrowserRouter>
  );
};


export default App