import SectionTitle from "../shared/SectionTitle/SectionTitle";
import {
  FaStethoscope,
  FaSyringe,
  FaTooth,
  FaEye,
  FaAmbulance,
  FaHeartbeat,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      name: "General Checkup",
      description: "Comprehensive health checkups for early diagnosis.",
      icon: <FaStethoscope className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      name: "Vaccinations",
      description: "Essential immunizations to prevent diseases.",
      icon: <FaSyringe className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      name: "Dental Care",
      description: "Oral hygiene services including free dental checkups.",
      icon: <FaTooth className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      name: "Eye Testing",
      description: "Vision screening and distribution of free glasses.",
      icon: <FaEye className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      name: "Emergency Care",
      description: "Immediate medical assistance in critical situations.",
      icon: <FaAmbulance className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      name: "Cardiology Services",
      description:
        "Heart health assessments and expert cardiology consultations.",
      icon: <FaHeartbeat className="text-teal-600 text-3xl mx-auto" />,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <SectionTitle heading="Specialties" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg text-center"
          >
            {service.icon}
            <h3 className="text-lg font-semibold mt-2">{service.name}</h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
