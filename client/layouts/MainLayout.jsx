import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import CookieConsent from "../src/components/CookieConsent";
import { Outlet } from "react-router-dom";
import MaintenanceCard from "../src/components/MaintenanceCard";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navbar />

      <div className="flex items-center justify-center px-3 md:px-0">
        <div className="bg-[#69A9EA] w-full max-w-6xl p-4 md:p-8 rounded-4xl h-full">
          <Outlet />
        </div>
      </div>

      <Footer />
      <CookieConsent />
      <MaintenanceCard/>
    </div>
  );
};

export default MainLayout;