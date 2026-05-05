import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FindDoctorSection from "../components/FindDoctorSection";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FindDoctorSection/>
      <ServiceSection/>
    </div>
  );
};

export default Home;