import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DoctorCardHome = ({ doctor }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100"
    >
      {/* IMAGE */}
      <div className="h-44 bg-slate-100 overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.full_name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-800">
          Dr. {doctor.full_name}
        </h3>

        <p className="text-sm text-cyan-700 font-medium mt-1">
          {doctor.specialization}
        </p>

        <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
          <span>⭐ {doctor.rating}</span>
          <span className="text-slate-400">
            ({doctor.reviews} reviews)
          </span>
        </div>

        <p className="text-xs text-slate-500 mt-2">
          {doctor.available_days} • {doctor.available_time}
        </p>

        <p className="text-sm font-medium mt-1">
          LKR {doctor.consultation_fee}
        </p>

        <Link
          to={`/doctors/${doctor.id}`}
          className="mt-4 inline-flex w-full justify-center rounded-xl bg-indigo-500 px-4 py-2 text-white font-medium hover:bg-indigo-600 transition"
        >
          Book Appointment
        </Link>
      </div>
    </motion.div>
  );
};

export default DoctorCardHome;