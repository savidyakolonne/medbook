import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import FindDoctorSection from "./FindDoctorSection";
import ServiceSection from "./ServiceSection";

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