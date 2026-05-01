import { useEffect, useRef } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const GoogleSignInButton = () => {
  const buttonRef = useRef(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.google || !buttonRef.current) return;

    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(buttonRef.current, {
      theme: "outline",
      size: "large",
      shape: "rectangular",
      width: 300,
    });
  }, []);

  const handleCredentialResponse = async (response) => {
    try {
      const res = await api.post("/auth/google", {
        credential: response.credential,
      });

      login(res.data.user, res.data.token);
      navigate("/doctors");
    } catch (error) {
      console.error("Google sign-in failed", error);
      alert(error.response?.data?.message || "Google sign-in failed");
    }
  };

  return <div ref={buttonRef} className="mt-4 flex justify-center" />;
};

export default GoogleSignInButton;