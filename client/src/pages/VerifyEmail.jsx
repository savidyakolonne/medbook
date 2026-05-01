import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../services/api";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("Verifying your email...");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setMessage("Verification token is missing");
        return;
      }

      try {
        const res = await api.get(`/auth/verify-email?token=${token}`);
        setMessage(res.data.message);
        setSuccess(true);
      } catch (error) {
        setMessage(error.response?.data?.message || "Verification failed");
      }
    };

    verify();
  }, [searchParams]);

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-xl bg-white p-8 shadow text-center">
        <h2 className="mb-4 text-2xl font-bold">Email Verification</h2>
        <p className={success ? "text-green-700" : "text-red-700"}>{message}</p>

        {success && (
          <Link
            to="/login"
            className="mt-6 inline-block rounded bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700"
          >
            Go to Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;