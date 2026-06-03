import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setOpen(false);
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav className="px-4 md:px-32 relative z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="logo" width={130} />
        </Link>

        {/* toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl z-50"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/doctors">Doctors</Link>

          {user ? (
            <>
              <Link to="/appointments">My Appointments</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link className="bg-[#69A9EA] px-3 py-1 rounded text-white" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* MOBILE MENU WITH BLUR OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            {/* blur background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/30 backdrop-blur-md"
            />

            {/* sliding menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 p-6 flex flex-col gap-5"
            >
              <Link onClick={closeMenu} to="/">Home</Link>
              <Link onClick={closeMenu} to="/services">Services</Link>
              <Link onClick={closeMenu} to="/about">About</Link>
              <Link onClick={closeMenu} to="/contact">Contact</Link>
              <Link onClick={closeMenu} to="/doctors">Doctors</Link>

              <hr />

              {user ? (
                <>
                  <Link onClick={closeMenu} to="/appointments">
                    My Appointments
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-left text-red-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link onClick={closeMenu} to="/login">Login</Link>
                  <Link onClick={closeMenu} to="/register">
                    Register
                  </Link>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;