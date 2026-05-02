import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtentedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import MyAppointments from "./pages/MyAppointments";
import NotFound from "./pages/NotFound";
import VerifyEmail from "./pages/VerifyEmail";

const App = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
    <Navbar />

      <div className="flex items-center justify-center">
        <div className="bg-[#69A9EA] w-full max-w-6xl p-8 rounded-4xl h-full">
      
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
            <Route path="*" element={<NotFound />} />
            <Route path="/verify-email" element={<VerifyEmail/>} />
          </Routes>
        </div>
      
      </div>
    </div>
  );
};

export default App;