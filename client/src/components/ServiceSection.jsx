import serviceHrImg from "../assets/servicesectionhrlady.png";
import doctorConsultationsIcon from "../assets/doctorconsulticon.png" ; 
import labTestIcon from "../assets/labtesticon.png" ; 
import onlineBookingIcon from "../assets/onlinebookingicon.png" ; 
import pharmacyIcon from "../assets/pharmacyicon.png"
import emergencyIcon from  "../assets/emergencyicon.png"

const ServiceSection = () => {
  return (
    <div className="bg-[#69A9EA] py-16 flex flex-col items-center relative">

      <h1 className="text-4xl font-bold text-white mb-10">Services</h1>

      {/* Container */}
      <div className="relative w-[900px] h-[600px]">

        {/* Center Image */}
        <div className="">
          <img
          src={serviceHrImg}
          alt="service HR lady image"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px]"
        />
        </div>

        {/* Cards */}

        {/* Top Left */}
        <div className="absolute top-0 left-10 bg-white px-3 py-3 rounded-2xl flex items-center gap-4">
            <div>
                <img src={doctorConsultationsIcon} alt="doctorConsultationsIcon" width={80} />
            </div>
            <h1 className="font-bold text-2xl/6">Doctor <br />Consultations</h1>
        </div>

        {/* Top Right */}
        <div className="absolute top-10 right-10 bg-white px-3 py-3 rounded-2xl flex items-center  gap-4">
          <div>
            <img src={labTestIcon} alt="Lab Tests icon" width={80} />
          </div>
          <h1 className="font-bold text-2xl/6">Lab Tests &<br />Diagnostics</h1>
        </div>

        {/* Mid Left */}
        <div className="absolute top-32 left-0 bg-white px-6 py-3 rounded-2xl flex items-center gap-4">
          <div>
            <img src={onlineBookingIcon} alt="onlineBookingIcon" width={80} />
          </div>
           <h1 className="font-bold text-2xl/6">Online<br />Appointment<br />Booking</h1>
        </div>

        {/* Mid Right */}
        <div className="absolute top-40 right-0 bg-white px-6 py-3 rounded-2xl flex items-center gap-4">
          <div>
            <img src={labTestIcon} alt="Lab Tests icon" width={80} />
          </div>
           <h1 className="font-bold text-2xl/6">General<br />Checkups</h1>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-10 left-10 bg-white px-6 py-3 rounded-2xl flex items-center gap-4">
          <div>
            <img src={pharmacyIcon} alt="pharmacyIcon" width={80} />
          </div>
          <h1 className="font-bold text-2xl/6">Pharmacy<br />Services</h1>
        </div>

        {/* Bottom Mid Left */}
        <div className="absolute bottom-45 left-0 bg-white px-6 py-3 rounded-2xl flex items-center gap-4">
          <div>
            <img src={emergencyIcon} alt="emergencyIcon" width={80} />
          </div>
          <h1 className="font-bold text-2xl/6">Emergency<br />Care</h1>
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;