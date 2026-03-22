import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-slate-900 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold">
          MedBook
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-cyan-300">
            Home
          </Link>
          <Link to="/doctors" className="hover:text-cyan-300">
            Doctors
          </Link>

          {user ? (
            <>
              <Link to="/appointments" className="hover:text-cyan-300">
                My Appointments
              </Link>
              <button
                onClick={handleLogout}
                className="rounded bg-red-500 px-3 py-1 hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-cyan-300">
                Login
              </Link>
              <Link
                to="/register"
                className="rounded bg-cyan-500 px-3 py-1 hover:bg-cyan-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;