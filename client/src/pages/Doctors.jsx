import { useEffect, useState } from "react";
import api from "../services/api";
import DoctorCard from "../components/DoctorCard";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    try {
      const res = await api.get("/doctors");
      setDoctors(res.data);
    } catch (error) {
      console.error("Failed to fetch doctors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="mb-6 text-3xl font-bold">Available Doctors</h2>

      {loading ? (
        <p>Loading doctors...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Doctors;