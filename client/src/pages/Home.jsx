import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import FindDoctorSection from "./FindDoctorSection";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FindDoctorSection/>
    </div>
  );
};

export default Home;