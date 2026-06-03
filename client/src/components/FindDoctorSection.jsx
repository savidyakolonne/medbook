import doctorFindSectionBanner from "../assets/dcotorsbookingsectionbanner.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import DoctorCardHome from "./DoctorCardHome";

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
  const [query, setQuery] = useState("");

  const doctors = [
    {
      id: 1,
      full_name: "Sarah Perera",
      specialization: "Cardiologist",
      available_days: "Mon - Wed",
      available_time: "9:00 AM - 2:00 PM",
      consultation_fee: 5000,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      rating: 4.8,
      reviews: 120,
    },
    {
      id: 2,
      full_name: "Nimal Fernando",
      specialization: "Dermatologist",
      available_days: "Tue - Thu",
      available_time: "10:00 AM - 4:00 PM",
      consultation_fee: 4000,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      rating: 4.6,
      reviews: 98,
    },
    {
      id: 3,
      full_name: "Amaya Silva",
      specialization: "Pediatrician",
      available_days: "Mon - Fri",
      available_time: "8:00 AM - 1:00 PM",
      consultation_fee: 4500,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      rating: 4.9,
      reviews: 210,
    },
    {
      id: 4,
      full_name: "Ravi Jayasinghe",
      specialization: "Neurologist",
      available_days: "Wed - Sat",
      available_time: "1:00 PM - 6:00 PM",
      consultation_fee: 6000,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      rating: 4.7,
      reviews: 150,
    },
  ];

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.full_name.toLowerCase().includes(query.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#F8F8F8] rounded-2xl p-4 md:p-6"
    >
      {/* HERO */}
      <motion.div
        variants={scaleIn}
        className="rounded-2xl bg-cover bg-center min-h-[260px] md:min-h-[300px] px-4"
        style={{ backgroundImage: `url(${doctorFindSectionBanner})` }}
      >
        {/* TITLE */}
        <motion.div variants={fadeUp} className="flex justify-center py-4 md:py-5">
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-white text-center leading-snug">
            Find and Book the Right Doctor
          </h1>
        </motion.div>

        {/* SEARCH */}
        <motion.div variants={fadeUp} className="flex justify-center py-6 md:py-10">
          <div className="flex bg-white border border-gray-300 h-[44px] md:h-[46px] rounded-2xl overflow-hidden max-w-md w-full items-center shadow-md">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="w-full h-full outline-none text-sm px-3 text-gray-600"
              placeholder="Search doctors or specialists"
            />

            <button className="bg-indigo-500 w-24 md:w-28 h-9 rounded-xl text-sm text-white mr-1 hover:bg-indigo-600 transition">
              Search
            </button>
          </div>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div
          variants={fadeIn}
          className="text-white flex justify-center px-4 md:px-6"
        >
          <h2 className="text-center max-w-xl text-sm md:text-base opacity-90">
            Search by specialty or doctor name to book appointments easily.
          </h2>
        </motion.div>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 px-2 md:px-6 mt-6 md:mt-8"
      >
        {filteredDoctors.map((doc) => (
          <motion.div key={doc.id} variants={fadeUp}>
            <DoctorCardHome doctor={doc} />
          </motion.div>
        ))}
      </motion.div>

      {/* BUTTON */}
      <div className="flex justify-center mt-8 md:mt-10">
        <Link to="/doctors">
          <button className="group px-6 md:px-8 py-2.5 bg-indigo-600 rounded-lg text-white cursor-pointer active:scale-95 transition duration-300 hover:bg-indigo-700 text-sm md:text-base">
            See All Doctors
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FindDoctorSection;