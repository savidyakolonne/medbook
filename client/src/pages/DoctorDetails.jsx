import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppointmentForm from "../components/AppointmentForm";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const DoctorDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDoctor = async () => {
    try {
      const res = await api.get(`/doctors/${id}`);
      setDoctor(res.data);
    } catch (error) {
      console.error("Failed to fetch doctor");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, [id]);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (!doctor) {
    return <div className="p-6 text-center">Doctor not found</div>;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="rounded-xl bg-white p-8 shadow">
        <h2 className="text-3xl font-bold text-slate-800">{doctor.full_name}</h2>
        <p className="mt-2 text-lg text-cyan-700">{doctor.specialization}</p>
        <p className="mt-1 text-slate-600">{doctor.hospital}</p>
        <p className="mt-4 text-slate-600">
          <span className="font-semibold">Available Days:</span>{" "}
          {doctor.available_days}
        </p>
        <p className="text-slate-600">
          <span className="font-semibold">Available Time:</span>{" "}
          {doctor.available_time}
        </p>
        <p className="mt-2 text-slate-600">
          <span className="font-semibold">Consultation Fee:</span> LKR{" "}
          {doctor.consultation_fee}
        </p>
        <p className="mt-4 text-slate-700">{doctor.bio}</p>
      </div>

      {user ? (
        <AppointmentForm doctorId={doctor.id} />
      ) : (
        <div className="mt-6 rounded bg-yellow-100 p-4 text-yellow-700">
          Please login to book an appointment.
        </div>
      )}
    </div>
  );
};

export default DoctorDetails;