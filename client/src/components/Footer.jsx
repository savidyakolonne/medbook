import { Link } from "react-router-dom";
import logo from "/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-center mt-10 md:mt-16 px-4">
      <footer className="bg-[#F8F8F8] text-black w-full max-w-6xl p-6 md:p-8 rounded-t-3xl md:rounded-t-4xl">

        <div className="mx-auto max-w-6xl px-2 md:px-6 py-6 md:py-10">

          <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">

            {/* Logo & Description */}
            <div className="flex flex-col items-center md:items-start">
              <Link to="/">
                <img src={logo} alt="MedBook Logo" width={110} className="md:w-[120px]" />
              </Link>

              <p className="mt-4 text-sm text-black max-w-xs">
                MedBook helps patients connect with trusted healthcare
                professionals and manage appointments quickly and securely.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-3 font-semibold text-lg">Quick Links</h3>
              <div className="flex flex-col gap-2 text-sm md:text-base">
                <Link to="/" className="hover:text-cyan-400">Home</Link>
                <Link to="/services" className="hover:text-cyan-400">Services</Link>
                <Link to="/doctors" className="hover:text-cyan-400">Doctors</Link>
                <Link to="/about" className="hover:text-cyan-400">About</Link>
                <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-3 font-semibold text-lg">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <p>📍 Colombo, Sri Lanka</p>
                <p>📞 +94 77 123 4567</p>
                <p>✉️ support@medbook.com</p>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-black">
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="text-blue-800 hover:underline">
              MedBook
            </Link>
            . All Rights Reserved.
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;