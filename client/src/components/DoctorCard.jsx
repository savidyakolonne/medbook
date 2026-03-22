import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <h3 className="text-xl font-semibold text-slate-800">{doctor.full_name}</h3>
      <p className="mt-2 text-slate-600">{doctor.specialization}</p>
      <p className="text-sm text-slate-500">{doctor.hospital}</p>
      <p className="mt-2 text-sm text-slate-500">
        Available: {doctor.available_days}
      </p>
      <p className="text-sm text-slate-500">Time: {doctor.available_time}</p>
      <p className="mt-2 font-medium text-cyan-700">
        LKR {doctor.consultation_fee}
      </p>

      <Link
        to={`/doctors/${doctor.id}`}
        className="mt-4 inline-block rounded bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default DoctorCard;