import doctorFindSectionBanner from "../assets/dcotorsbookingsectionbanner.png";

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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const FindDoctorSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#F8F8F8] rounded-2xl p-6"
    >
      {/* HERO BANNER */}
      <motion.div
        variants={scaleIn}
        className="bg-[#F8F8F8] rounded-2xl bg-cover bg-center bg-no-repeat min-h-[300px]"
        style={{ backgroundImage: `url(${doctorFindSectionBanner})` }}
      >
        {/* TITLE */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center py-5"
        >
          <h1 className="text-5xl text-[#F8F8F8] text-center">
            Find and Book the Right Doctor
          </h1>
        </motion.div>

        {/* SEARCH BAR */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center py-10"
        >
          <motion.div
            whileFocus={{ scale: 1.03 }}
            className="flex border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-2xl overflow-hidden max-w-md w-full justify-center items-center shadow-md"
          >
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="#6B7280"
            >
              <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
            </svg>

            <input
              type="text"
              className="w-full h-full outline-none text-sm text-gray-500"
              placeholder="search for doctors, specialists"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-indigo-500 w-32 h-9 rounded-2xl text-sm text-white mr-[5px]"
            >
              Search
            </motion.button>
          </motion.div>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div
          variants={fadeIn}
          className="text-[#F8F8F8] flex justify-center items-center px-6"
        >
          <h2 className="text-center max-w-xl">
            Search by specialty, doctor name, or location to schedule your next
            appointment seamlessly.
          </h2>
        </motion.div>
      </motion.div>

      {/* DOCTOR CARDS SECTION */}
      <motion.div
        variants={container}
        className="flex gap-5 px-10 mt-6"
      >
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-4 rounded-xl shadow-md w-full"
        >
          doctor1
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-4 rounded-xl shadow-md w-full"
        >
          doctor2
        </motion.div>
      </motion.div>

      {/* FOOTER TEXT */}
      <motion.div
        variants={fadeUp}
        className="mt-6 text-center text-gray-600"
      >
        Doctors
      </motion.div>
    </motion.div>
  );
};

export default FindDoctorSection;