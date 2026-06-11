import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./components/Doctors";
import DoctorDetails from "./components/DoctorDetails";
import MyAppointments from "./pages/MyAppointments";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";

import DoctorConsultant from "../src/pages/servicespages/DoctorConsultant"

const App = () => {
  return (
    <Routes>

      {/* USER ROUTES */}
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About/>}/>

        {/* service */}
        <Route path="services/doctor-consultations" element={<DoctorConsultant/>}/>
      </Route>

      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<AdminLayout />}>
         
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default App;