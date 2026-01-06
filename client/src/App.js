import React, { Suspense, lazy } from "react"; // ✅ Import Lazy & Suspense
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components (Inhe direct import rehne do, ye har page par chahiye)
import ScrollToTop from "./components/ScrollTop";
import Navbar from "./components/Sections/Header";
import Footer from "./components/Sections/Footer";

// 🛑 STEP 1: Pages ko Direct Import se hata kar 'lazy' import karo
// Pehle aise tha: import About from "./Pages/About/About";
// Ab aise hoga:

const Layouts = lazy(() => import("./components/Sections/Layouts")); // Home
const About = lazy(() => import("./Pages/About/About"));
const Location = lazy(() => import("./Pages/Location/LocationPage"));
const PatientReview = lazy(() =>
  import("./Pages/PatientReview/PatientReviewPage")
);
const OrthopedicPage = lazy(() => import("./Pages/Orthopedic/OrthopedicPage")); // ✅ Corrected Path to Page
const NotFoundPage = lazy(() => import("./Pages/PageNotFound/PageNotFound"));

// 🌀 Simple Loading Spinner Component (Jab tak page load ho raha hai)
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow pt-16">
            {/* 🛑 STEP 2: Routes ko <Suspense> mein wrap karo */}
            {/* fallback props mein wo component daalo jo loading ke waqt dikhana hai */}

            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Layouts />} />
                <Route path="/about" element={<About />} />
                <Route path="/location" element={<Location />} />
                <Route path="/patientreview" element={<PatientReview />} />
                <Route path="/orthopedic" element={<OrthopedicPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={4000}
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
    </HelmetProvider>
  );
};

export default App;
