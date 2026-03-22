import { useState } from "react";
import api from "../services/api";

const AppointmentForm = ({ doctorId, onSuccess }) => {
  const [formData, setFormData] = useState({
    appointment_date: "",
    appointment_time: "",
    notes: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const payload = {
        doctor_id: doctorId,
        appointment_date: formData.appointment_date,
        appointment_time: formData.appointment_time,
        notes: formData.notes,
      };

      const res = await api.post("/appointments", payload);
      setMessage(res.data.message);
      setFormData({
        appointment_date: "",
        appointment_time: "",
        notes: "",
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to book appointment");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-xl bg-white p-6 shadow"
    >
      <h3 className="mb-4 text-xl font-semibold">Book Appointment</h3>

      {message && (
        <p className="mb-4 rounded bg-green-100 p-3 text-green-700">{message}</p>
      )}

      {error && (
        <p className="mb-4 rounded bg-red-100 p-3 text-red-700">{error}</p>
      )}

      <div className="mb-4">
        <label className="mb-1 block font-medium">Date</label>
        <input
          type="date"
          name="appointment_date"
          value={formData.appointment_date}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-1 block font-medium">Time</label>
        <input
          type="time"
          name="appointment_time"
          value={formData.appointment_time}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-1 block font-medium">Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2"
          rows="3"
          placeholder="Optional notes"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700"
      >
        Book Now
      </button>
    </form>
  );
};

export default AppointmentForm;