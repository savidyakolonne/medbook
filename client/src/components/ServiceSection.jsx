import serviceHrImg from "../assets/servicesectionhrlady.png";
import doctorConsultationsIcon from "../assets/doctorconsulticon.png";
import labTestIcon from "../assets/labtesticon.png";
import onlineBookingIcon from "../assets/onlinebookingicon.png";
import pharmacyIcon from "../assets/pharmacyicon.png";
import emergencyIcon from "../assets/emergencyicon.png";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";

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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ServiceSection = () => {
  const IconCard = ({ icon, text, position }) => {
    const iconRef = useRef(null);
    const cardRef = useRef(null);

    const onEnter = () => {
      gsap.to(cardRef.current, {
        scale: 1.06,
        duration: 0.35,
        ease: "power2.out",
      });

      gsap.to(iconRef.current, {
        rotate: -12,
        y: -2,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.35,
        ease: "power2.out",
      });

      gsap.to(iconRef.current, {
        rotate: 0,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    return (
      <motion.div
        variants={floatUp}
        ref={cardRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={`absolute ${position} bg-white p-2 md:p-3 rounded-2xl flex items-center gap-2 md:gap-4 shadow-md cursor-pointer origin-center`}
      >
        <img
          ref={iconRef}
          src={icon}
          className="w-12 md:w-20"
        />
        <h1 className="font-bold text-sm md:text-2xl leading-tight">
          {text}
        </h1>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#69A9EA] py-10 md:py-16 flex flex-col items-center"
    >
      {/* Title */}
      <motion.h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Services
      </motion.h1>

      {/* CONTAINER */}
      <div className="relative w-full max-w-[900px] aspect-[3/2]">

        {/* CENTER IMAGE */}
        <motion.img
          src={serviceHrImg}
          alt="service HR lady"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55%] md:w-[500px]"
        />

        <IconCard
          icon={doctorConsultationsIcon}
          text="Doctor Consultations"
          position="top-[2%] left-[5%]"
        />

        <IconCard
          icon={labTestIcon}
          text="Lab Tests & Diagnostics"
          position="top-[8%] right-[5%]"
        />

        <IconCard
          icon={onlineBookingIcon}
          text="Online Booking"
          position="top-[35%] left-[0%]"
        />

        <IconCard
          icon={labTestIcon}
          text="General Checkups"
          position="top-[40%] right-[0%]"
        />

        <IconCard
          icon={pharmacyIcon}
          text="Pharmacy Services"
          position="bottom-[5%] left-[8%]"
        />

        <IconCard
          icon={emergencyIcon}
          text="Emergency Care"
          position="bottom-[25%] left-[0%]"
        />

      </div>
    </motion.div>
  );
};

export default ServiceSection;