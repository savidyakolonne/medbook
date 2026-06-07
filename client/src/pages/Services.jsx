import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <div className="w-full px-6 py-10 text-white">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Our Services
      </motion.h1>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {servicesData.map((service, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Link
              to={service.path}
              className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-md
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-14 h-14 object-contain"
              />

              <h2 className="font-semibold text-lg text-gray-800 leading-snug">
                {service.title}
              </h2>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;