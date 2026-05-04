import serviceHrImg from "../assets/servicesectionhrlady.png";
import doctorConsultationsIcon from "../assets/doctorconsulticon.png" ; 

const ServiceSection = () => {
  return (
    <div className="bg-[#69A9EA] py-16 flex flex-col items-center relative">

      <h1 className="text-4xl font-bold text-white mb-10">Services</h1>

      {/* Container */}
      <div className="relative w-[900px] h-[500px]">

        {/* Center Image */}
        <img
          src={serviceHrImg}
          alt="service HR lady image"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px]"
        />

        {/* Cards */}

        {/* Top Left */}
        <div className="absolute top-0 left-10 bg-white px-3 py-3 rounded-2xl flex items-center gap-2">
            <div>
                <img src={doctorConsultationsIcon} alt="doctorConsultationsIcon" width={80} />
            </div>
            <h1 className="font-bold">Doctor <br />Consultations</h1>
        </div>

        {/* Top Right */}
        <div className="absolute top-10 right-10 bg-white px-6 py-3 rounded-2xl">
          Lab Tests & Diagnostics
        </div>

        {/* Mid Left */}
        <div className="absolute top-32 left-0 bg-white px-6 py-3 rounded-2xl">
          Online Appointment Booking
        </div>

        {/* Mid Right */}
        <div className="absolute top-40 right-0 bg-white px-6 py-3 rounded-2xl">
          General Checkups
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-10 left-10 bg-white px-6 py-3 rounded-2xl">
          Pharmacy Services
        </div>

        {/* Bottom Mid Left */}
        <div className="absolute bottom-32 left-0 bg-white px-6 py-3 rounded-2xl">
          Emergency Care
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;