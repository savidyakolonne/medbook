import doctorImgOne from "../assets/herodoctoronenobgone.png" ; 
import generalCheckIcon from  "../assets/generalcheckiconhro.png" ; 

const HeroSection = () => {
  return (
    <div className="bg-[#69A9EA] rounded-3xl px-10 py-12 flex items-center justify-between">
      
      <div className="text-white flex flex-col gap-15">
  
        <h1 className="text-7xl font-semibold max-w-full">
          Your health, <br />
          <span className="whitespace-nowrap">our first priority</span>
        </h1>

        <div className="flex items-center gap-4">
          <img
            src={generalCheckIcon}
            alt="generalCheckIcon"
            className=" h-20"
          />
          <p className="text-2xl opacity-90 max-w-sm">
            “Simple checkups to keep you healthy and worry free”
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-white text-gray-800 px-6 py-4 rounded-2xl text-lg font-medium hover:text-[#F8F8F8] hover:bg-[#641FEB] cursor-pointer">
            Quick Appointment
          </button>

          <button className="bg-white text-gray-800 px-6 py-4 rounded-2xl text-lg font-medium hover:text-[#F8F8F8] hover:bg-[#641FEB] cursor-pointer">
            Find a Doctor
          </button>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-end shrink-0">
        <img
          src={doctorImgOne}
          alt="doctor"
          className="w-[500px] max-w-full object-contain"
        />
      </div>

    </div>
  );
};

export default HeroSection;