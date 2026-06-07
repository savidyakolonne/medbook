import { motion } from "framer-motion";
import contactImg from "../assets/contactusimg.png"; // change if needed

const Contact = () => {
  return (
    <div className="w-full px-6 py-10 text-white">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Contact Us
      </motion.h1>

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

        {/* LEFT TOP IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={contactImg}
            alt="contact"
            className="w-[280px] md:w-[350px] rounded-2xl"
          />
        </motion.div>

        {/* RIGHT TOP TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center md:text-left"
        >
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <p className="text-gray-300">
            We’re always ready to support your health needs. Whether it’s an
            appointment, emergency, or general inquiry, our team is here for you.
          </p>

          <div className="text-gray-300 space-y-2">
            <p>📍 Colombo, Sri Lanka</p>
            <p>📞 +94 77 123 4567</p>
            <p>📧 support@medbook.com</p>
            <p>⏰ 24/7 Emergency Care</p>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM FORM */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-16 bg-white text-black p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Send a Message
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </button>

        </form>
      </motion.div>

    </div>
  );
};

export default Contact;