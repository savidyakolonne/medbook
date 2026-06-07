import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect } from "react";

import aboutBanner from "../assets/aboutusbanner.png";
import missionVisionImg from "../assets/ourmissionimg.png";

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".fade",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="w-full px-6 py-10 text-white">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10"
      >
        About Us
      </motion.h1>

      {/* Banner */}
      <div className="flex justify-center fade">
        <img
          src={aboutBanner}
          alt="about banner"
          className="rounded-2xl w-full max-w-5xl"
        />
      </div>

      {/* Intro */}
      <p className="text-center mt-8 max-w-3xl mx-auto text-gray-300 fade">
        Welcome to MedBook, a trusted healthcare provider dedicated to delivering
        quality medical services with compassion and professionalism. We ensure
        every patient receives the best care in a safe and comfortable environment.
      </p>

      {/* Mission - Image - Vision Layout */}
      <div className="mt-16 flex flex-col items-center gap-12">

        {/* Mission */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl"
        >
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-300">
            To provide accessible, high-quality healthcare services that improve
            the health and well-being of our patients and community.
          </p>
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={missionVisionImg}
            alt="mission vision"
            className="w-[350px] md:w-[450px]"
          />
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl"
        >
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-300">
            To be a leading medical center recognized for excellence in patient
            care, innovation, and community health.
          </p>
        </motion.div>

      </div>

      {/* Why Us */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Why Us</h2>

        <div className="text-gray-300 space-y-2">
          <p>✔ Experienced doctors</p>
          <p>✔ Modern medical equipment</p>
          <p>✔ 24/7 emergency care</p>
          <p>✔ Patient-centered approach</p>
        </div>
      </motion.div>

    </div>
  );
};

export default About;