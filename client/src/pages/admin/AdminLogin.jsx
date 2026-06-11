import { useState, useRef } from "react";
import adminLogo from "/adminlogo.png";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const iconRef = useRef(null);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);

        gsap.fromTo(
            iconRef.current,
            { scale: 0.8, opacity: 0.5 },
            { scale: 1, opacity: 1, duration: 0.25, ease: "power2.out" }
        );
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "admin") {
            alert("Login Successful!");
            navigate("/admin/dashboard");
        } else {
            alert("Invalid Username or Password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8]">
            <div className="p-8 rounded-xl shadow-lg w-full max-w-md">
                
                <div className="flex justify-center mb-4">
                    <img src={adminLogo} alt="Admin Logo" width={350} />
                </div>

                <h1 className="text-2xl font-bold text-center mb-6">
                    Welcome, Admin
                </h1>

                <form onSubmit={handleLogin} className="space-y-4">
                    
                    <div>
                        <label className="block mb-1 font-medium">
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2 pr-12"
                            />

                            <button
                                type="button"
                                onClick={handleTogglePassword}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                            >
                                <span ref={iconRef}>
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;