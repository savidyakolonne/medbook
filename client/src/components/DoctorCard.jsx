import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DoctorCard = ({ doctor }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="rounded-2xl bg-white p-6 shadow-md border border-slate-100 hover:shadow-xl transition"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Dr. {doctor.full_name}
          </h3>
          <p className="text-sm text-cyan-700 font-medium mt-1">
            {doctor.specialization}
          </p>
        </div>

        {/* badge */}
        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
          Available
        </span>
      </div>

      {/* Schedule */}
      <div className="mt-3 space-y-1 text-sm text-slate-600">
        <p>
          📅 <span className="font-medium">Days:</span>{" "}
          {doctor.available_days}
        </p>
        <p>
          ⏰ <span className="font-medium">Time:</span>{" "}
          {doctor.available_time}
        </p>
      </div>

      {/* Fee */}
      <div className="mt-4 flex items-center justify-between">
        <p className="font-semibold text-slate-800">
          💰 LKR {doctor.consultation_fee}
        </p>

        <span className="text-xs text-slate-400">
          Consultation Fee
        </span>
      </div>

      {/* Button */}
      <Link
        to={`/doctors/${doctor.id}`}
        className="mt-5 inline-flex items-center justify-center w-full rounded-xl bg-slate-900 px-4 py-2 text-white font-medium hover:bg-slate-700 transition"
      >
        View Details →
      </Link>
    </motion.div>
  );
};

export default DoctorCard;