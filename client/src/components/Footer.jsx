import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-center mt-16">
        <footer className="bg-[#F8F8F8] text-black w-full max-w-6xl p-8 rounded-t-4xl">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <Link to="/">
                <img src={logo} alt="MedBook Logo" width={120}/>
            </Link>
            <p className="mt-4 text-sm text-black">
              MedBook helps patients connect with trusted healthcare
              professionals and manage appointments quickly and securely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-black">
              <Link to="/" className="hover:text-cyan-400">
                Home
              </Link>
              <Link to="/services" className="hover:text-cyan-400">
                Services
              </Link>
              <Link to="/doctors" className="hover:text-cyan-400">
                Doctors
              </Link>
              <Link to="/about" className="hover:text-cyan-400">
                About
              </Link>
              <Link to="/contact" className="hover:text-cyan-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-3 font-semibold">Contact Us</h3>
            <div className="space-y-2 text-black text-sm">
              <p>📍 Colombo, Sri Lanka</p>
              <p>📞 +94 77 123 4567</p>
              <p>✉️ support@medbook.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-4 text-center text-sm text-black">
          © {new Date().getFullYear()} <Link to="/" className="text-blue-800">MedBook</Link>. All Rights Reserved.
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;