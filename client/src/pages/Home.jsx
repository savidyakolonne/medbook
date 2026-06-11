import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FindDoctorSection from "../components/FindDoctorSection";
import ServiceSection from "../components/ServiceSection";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FindDoctorSection/>
      <ServiceSection/>
      <TestimonialSection/>
    </div>
  );
};

export default Home;