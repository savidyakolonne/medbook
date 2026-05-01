import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import GoogleSignInButton from "../components/GoogleSignInButton";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resendVerification = async () => {
    try {
      const res = await api.post("/auth/resend-verification", {
        email: formData.email,
      });
      setVerifyEmail(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend verification email");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setVerifyEmail("");

    try {
      const res = await api.post("/auth/login", formData);
      login(res.data.user, res.data.token);
      navigate("/doctors");
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      setError(msg);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <div className="rounded-xl bg-white p-8 shadow">
        <h2 className="mb-6 text-2xl font-bold">Login</h2>

        {error && <p className="mb-4 rounded bg-red-100 p-3 text-red-700">{error}</p>}
        {verifyEmail && <p className="mb-4 rounded bg-green-100 p-3 text-green-700">{verifyEmail}</p>}

        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="mb-4 w-full rounded border px-3 py-2" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="mb-4 w-full rounded border px-3 py-2" required />

          <button type="submit" className="w-full rounded bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700">
            Login
          </button>
        </form>

        {error === "Please verify your email before logging in" && (
          <button
            onClick={resendVerification}
            className="mt-4 w-full rounded border border-cyan-600 px-4 py-2 text-cyan-700 hover:bg-cyan-50"
          >
            Resend verification email
          </button>
        )}

        <div className="my-5 text-center text-slate-500">or</div>
        <GoogleSignInButton />

        <p className="mt-4 text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-cyan-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;