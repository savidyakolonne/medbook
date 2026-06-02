import doctorConsultationsIcon from "../assets/doctorconsulticon.png";
import labTestIcon from "../assets/labtesticon.png";
import onlineBookingIcon from "../assets/onlinebookingicon.png";
import pharmacyIcon from "../assets/pharmacyicon.png";
import emergencyIcon from "../assets/emergencyicon.png";
import generalCheckupIcon from "../assets/generalcheckupsicon.png";

const servicesData = [
  {
    title: "Doctor Consultations",
    icon: doctorConsultationsIcon,
  },
  {
    title: "Lab Tests & Diagnostics",
    icon: labTestIcon,
  },
  {
    title: "Online Appointment Booking",
    icon: onlineBookingIcon,
  },
  {
    title: "General Checkups",
    icon: generalCheckupIcon,
  },
  {
    title: "Pharmacy Services",
    icon: pharmacyIcon,
  },
  {
    title: "Emergency Care",
    icon: emergencyIcon,
  },
];

const Services = () => {
  return (
    <div className="w-full px-6 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        Our Services
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-md hover:shadow-xl transition"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-14 h-14 object-contain"
            />

            <h2 className="font-semibold text-lg leading-snug">
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;