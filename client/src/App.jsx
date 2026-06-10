import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import ProtectedRoute from "./components/ProtentedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./components/Doctors";
import DoctorDetails from "./components/DoctorDetails";
import MyAppointments from "./pages/MyAppointments";
import NotFound from "./pages/NotFound";
import VerifyEmail from "./pages/VerifyEmail";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DoctorConsultant from "./pages/servicespages/DoctorConsultant";

const App = () => {
  const [showMaintenance, setShowMaintenance] = useState(true);

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navbar />

      <div className="flex items-center justify-center px-3 md:px-0">
        <div className="bg-[#69A9EA] w-full max-w-6xl p-4 md:p-8 rounded-4xl h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />

            <Route
              path="/appointments"
              element={
                <ProtectedRoute>
                  <MyAppointments />
                </ProtectedRoute>
              }
            />

            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/services" element={<Services />} />

            <Route
              path="/services/doctor-consultations"
              element={<DoctorConsultant />}
            />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

      <Footer />
      <CookieConsent />

      {showMaintenance && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-white shadow-xl rounded-full px-5 py-3 flex items-center gap-3 border border-gray-200">
            <span className="text-lg">🚧</span>

            <p className="text-sm font-medium text-gray-700">
              Maintenance in Progress
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowMaintenance(false);
              }}
              className="text-gray-400 hover:text-gray-700 text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;