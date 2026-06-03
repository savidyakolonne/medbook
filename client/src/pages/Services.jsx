import { Link } from "react-router-dom";

import doctorConsultationsIcon from "../assets/doctorconsulticon.png";
import labTestIcon from "../assets/labtesticon.png";
import onlineBookingIcon from "../assets/onlinebookingicon.png";
import pharmacyIcon from "../assets/pharmacyicon.png";
import emergencyIcon from "../assets/emergencyicon.png";
import generalCheckupIcon from "../assets/generalcheckupsicon.png";

const servicesData = [
  {
    title: "Doctor Consultations",
    icon: doctorConsultationsIcon,
    path: "/services/doctor-consultations",
  },
  {
    title: "Lab Tests & Diagnostics",
    icon: labTestIcon,
    path: "/services/lab-tests",
  },
  {
    title: "Online Appointment Booking",
    icon: onlineBookingIcon,
    path: "/services/online-booking",
  },
  {
    title: "General Checkups",
    icon: generalCheckupIcon,
    path: "/services/general-checkups",
  },
  {
    title: "Pharmacy Services",
    icon: pharmacyIcon,
    path: "/services/pharmacy",
  },
  {
    title: "Emergency Care",
    icon: emergencyIcon,
    path: "/services/emergency-care",
  },
];

const Services = () => {
  return (
    <div className="w-full px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <Link
            to={service.path}
            key={index}
            className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-md hover:shadow-xl transition"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-14 h-14 object-contain"
            />

            <h2 className="font-semibold text-lg leading-snug">
              {service.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;