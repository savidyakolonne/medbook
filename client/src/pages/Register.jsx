import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import GoogleSignInButton from "../components/GoogleSignInButton";

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await api.post("/auth/register", formData);
      setMessage(res.data.message);
      setFormData({
        full_name: "",
        email: "",
        password: "",
        phone: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <div className="rounded-xl bg-white p-8 shadow">
        <h2 className="mb-6 text-2xl font-bold">Register</h2>

        {error && <p className="mb-4 rounded bg-red-100 p-3 text-red-700">{error}</p>}
        {message && <p className="mb-4 rounded bg-green-100 p-3 text-green-700">{message}</p>}

        <form onSubmit={handleSubmit}>
          <input type="text" name="full_name" placeholder="Full name" value={formData.full_name} onChange={handleChange} className="mb-4 w-full rounded border px-3 py-2" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="mb-4 w-full rounded border px-3 py-2" required />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="mb-4 w-full rounded border px-3 py-2" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="mb-4 w-full rounded border px-3 py-2" required />

          <button type="submit" className="w-full rounded bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700">
            Register
          </button>
        </form>

        <div className="my-5 text-center text-slate-500">or</div>
        <GoogleSignInButton />

        <p className="mt-4 text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;