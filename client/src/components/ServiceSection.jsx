import serviceHrImg from "../assets/servicesectionhrlady.png";
import doctorConsultationsIcon from "../assets/doctorconsulticon.png";
import labTestIcon from "../assets/labtesticon.png";
import onlineBookingIcon from "../assets/onlinebookingicon.png";
import pharmacyIcon from "../assets/pharmacyicon.png";
import emergencyIcon from "../assets/emergencyicon.png";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const floatUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const imageFloat = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServiceSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#69A9EA] py-16 flex flex-col items-center relative"
    >
      {/* Title */}
      <motion.h1
        variants={floatUp}
        className="text-4xl font-bold text-white mb-10"
      >
        Services
      </motion.h1>

      {/* Container */}
      <div className="relative w-[900px] h-[600px]">

        {/* Center Image */}
        <motion.img
          variants={imageFloat}
          src={serviceHrImg}
          alt="service HR lady image"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px]"
        />

        {/* CARD 1 */}
        <motion.div
          variants={floatUp}
          whileHover={{ scale: 1.05 }}
          className="absolute top-0 left-10 bg-white px-3 py-3 rounded-2xl flex items-center gap-4 shadow-md"
        >
          <img src={doctorConsultationsIcon} alt="" width={80} />
          <h1 className="font-bold text-2xl/6">
            Doctor <br /> Consultations
          </h1>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          variants={floatUp}
          whileHover={{ scale: 1.05 }}
          className="absolute top-10 right-10 bg-white px-3 py-3 rounded-2xl flex items-center gap-4 shadow-md"
        >
          <img src={labTestIcon} alt="" width={80} />
          <h1 className="font-bold text-2xl/6">
            Lab Tests &<br /> Diagnostics
          </h1>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          variants={floatUp}
          whileHover={{ scale: 1.05 }}
          className="absolute top-32 left-0 bg-white px-6 py-3 rounded-2xl flex items-center gap-4 shadow-md"
        >
          <img src={onlineBookingIcon} alt="" width={80} />
          <h1 className="font-bold text-2xl/6">
            Online<br /> Appointment<br /> Booking
          </h1>
        </motion.div>

        {/* CARD 4 */}
        <motion.div
          variants={floatUp}
          whileHover={{ scale: 1.05 }}
          className="absolute top-40 right-0 bg-white px-6 py-3 rounded-2xl flex items-center gap-4 shadow-md"
        >
          <img src={labTestIcon} alt="" width={80} />
          <h1 className="font-bold text-2xl/6">
            General<br /> Checkups
          </h1>
        </motion.div>

        {/* CARD 5 */}
        <motion.div
          variants={floatUp}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-10 left-10 bg-white px-6 py-3 rounded-2xl flex items-center gap-4 shadow-md"
        >
          <img src={pharmacyIcon} alt="" width={80} />
          <h1 className="font-bold text-2xl/6">
            Pharmacy<br /> Services
          </h1>
        </motion.div>

        {/* CARD 6 */}
        <motion.div
          variants={floatUp}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-45 left-0 bg-white px-6 py-3 rounded-2xl flex items-center gap-4 shadow-md"
        >
          <img src={emergencyIcon} alt="" width={80} />
          <h1 className="font-bold text-2xl/6">
            Emergency<br /> Care
          </h1>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ServiceSection;