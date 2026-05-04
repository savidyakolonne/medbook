import doctorImgOne from "../assets/herodoctoronenobgone.png" ; 
import generalCheckIcon from  "../assets/generalcheckiconhro.png" ; 

const HeroSection = () => {
  return (
    <div className="bg-[#69A9EA] rounded-3xl px-10 py-12 flex items-center justify-between">
      
      <div className="text-white flex flex-col gap-10 max-w-xl">
  
  <h1 className="text-7xl font-semibold ">
    Your health, <br /> our first priority
  </h1>

  <div className="flex items-center gap-4">
    <img
      src={generalCheckIcon}
      alt="generalCheckIcon"
      className="w-12 h-12"
    />
    <p className="text-lg opacity-90 max-w-sm">
      “Simple checkups to keep you healthy and worry free”
    </p>
  </div>

  <div className="flex gap-4">
    <button className="bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-medium">
      Quick Appointment
    </button>
    <button className="bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-medium">
      Find a Doctor
    </button>
  </div>

</div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex justify-end">
        <img
          src={doctorImgOne}
          alt="doctor"
          className="w-[600px] object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;