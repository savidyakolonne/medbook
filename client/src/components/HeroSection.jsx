import doctorImgOne from "../assets/herodoctoronenobgone.png";
import generalCheckIcon from "../assets/generalcheckiconhro.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8 } },
};

const HeroSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-[#69A9EA] rounded-3xl px-6 md:px-10 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* LEFT SIDE */}
      <motion.div
        variants={container}
        className="text-white flex flex-col gap-8 md:gap-10 text-center md:text-left"
      >
        {/* Heading */}
        <motion.h1
          variants={fadeLeft}
          className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight"
        >
          Your health, <br />
          <span className="whitespace-nowrap">our first priority</span>
        </motion.h1>

        {/* Subtitle row */}
        <motion.div
          variants={fadeLeft}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
        >
          <img src={generalCheckIcon} alt="icon" className="h-16 md:h-20" />
          <p className="text-lg md:text-2xl opacity-90 max-w-sm">
            “Simple checkups to keep you healthy and worry free”
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Link to="/appointments">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-800 px-6 py-4 rounded-2xl text-lg font-medium hover:text-[#F8F8F8] hover:bg-[#641FEB] w-full sm:w-auto cursor-pointer"
            >
              Quick Appointment
            </motion.button>
          </Link>

          <Link to="/doctors">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-800 px-6 py-4 rounded-2xl text-lg font-medium hover:text-[#F8F8F8] hover:bg-[#641FEB] w-full sm:w-auto cursor-pointer"
            >
              Find a Doctor
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        variants={fadeRight}
        className="flex justify-center md:justify-end shrink-0"
      >
        <motion.img
          src={doctorImgOne}
          alt="doctor"
          className="w-[280px] sm:w-[380px] md:w-[500px] max-w-full object-contain"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;