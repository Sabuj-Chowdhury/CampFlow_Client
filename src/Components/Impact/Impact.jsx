import SectionTitle from "../shared/SectionTitle/SectionTitle";
import {
  FaUserMd,
  FaHandsHelping,
  FaHospital,
  FaPills,
  FaHeartbeat,
  FaRegSmile,
} from "react-icons/fa";

const Impact = () => {
  const stats = [
    {
      label: "Patients Treated",
      value: "10,000+",
      description: "Providing free medical assistance to those in need.",
      icon: <FaUserMd className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      label: "Volunteers",
      value: "500+",
      description: "Dedicated individuals making a difference in communities.",
      icon: <FaHandsHelping className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      label: "Medical Camps Held",
      value: "150+",
      description: "Organizing impactful health camps across regions.",
      icon: <FaHospital className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      label: "Medicines Distributed",
      value: "50,000+",
      description: "Providing essential medicines to underprivileged patients.",
      icon: <FaPills className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      label: "Surgeries Performed",
      value: "1,200+",
      description: "Life-saving operations conducted by expert surgeons.",
      icon: <FaHeartbeat className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      label: "Lives Impacted",
      value: "25,000+",
      description: "Transforming lives through healthcare and support.",
      icon: <FaRegSmile className="text-teal-600 text-3xl mx-auto" />,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 text-center">
      <SectionTitle heading="Our Impact" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg text-center"
          >
            {stat.icon}
            <h3 className="text-2xl font-bold text-teal-600 mt-2">
              {stat.value}
            </h3>
            <p className="text-gray-500">{stat.label}</p>
            <p className="text-gray-600 mt-2">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
