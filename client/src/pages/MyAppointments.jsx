import { useEffect, useState } from "react";
import api from "../services/api";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/appointments/my");
      setAppointments(res.data);
    } catch (error) {
      console.error("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  const cancelAppointment = async (id) => {
    try {
      await api.put(`/appointments/${id}/cancel`);
      fetchAppointments();
    } catch (error) {
      console.error("Failed to cancel appointment");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="mb-6 text-3xl font-bold">My Appointments</h2>

      {loading ? (
        <p>Loading appointments...</p>
      ) : appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="rounded-xl bg-white p-5 shadow">
              <h3 className="text-xl font-semibold">
                {appointment.doctor_name}
              </h3>
              <p className="text-slate-600">{appointment.specialization}</p>
              <p className="text-slate-600">{appointment.hospital}</p>
              <p className="mt-2 text-slate-700">
                Date: {appointment.appointment_date}
              </p>
              <p className="text-slate-700">
                Time: {appointment.appointment_time}
              </p>
              <p className="text-slate-700">Status: {appointment.status}</p>
              {appointment.notes && (
                <p className="text-slate-700">Notes: {appointment.notes}</p>
              )}

              {appointment.status !== "cancelled" && (
                <button
                  onClick={() => cancelAppointment(appointment.id)}
                  className="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                  Cancel Appointment
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;