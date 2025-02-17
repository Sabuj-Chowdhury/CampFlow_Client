import SectionTitle from "../shared/SectionTitle/SectionTitle";
import {
  FaHandSparkles,
  FaTint,
  FaAppleAlt,
  FaHeartbeat,
  FaDumbbell,
  FaBed,
  FaSun,
  FaLungs,
  FaSmile,
} from "react-icons/fa";

const HealthTips = () => {
  const tips = [
    {
      tip: "Wash hands frequently",
      detail: "Reduces the spread of germs and infections.",
      icon: <FaHandSparkles className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      tip: "Stay hydrated",
      detail: "Drink at least 8 glasses of water daily for good health.",
      icon: <FaTint className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      tip: "Eat a balanced diet",
      detail: "Include fruits, vegetables, and proteins in your meals.",
      icon: <FaAppleAlt className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      tip: "Get regular checkups",
      detail: "Early detection of diseases saves lives.",
      icon: <FaHeartbeat className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      tip: "Exercise daily",
      detail: "Boosts immunity and keeps the body active.",
      icon: <FaDumbbell className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      tip: "Get enough sleep",
      detail: "Aim for at least 7-8 hours of sleep per night.",
      icon: <FaBed className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      tip: "Get sunlight exposure",
      detail:
        "Vitamin D from sunlight helps maintain strong bones and a healthy immune system.",
      icon: <FaSun className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      tip: "Practice deep breathing",
      detail: "Helps reduce stress and improves lung function.",
      icon: <FaLungs className="text-teal-600 text-3xl mx-auto" />,
    },
    {
      tip: "Maintain a positive mindset",
      detail:
        "A happy mind contributes to overall well-being and reduces stress.",
      icon: <FaSmile className="text-teal-600 text-3xl mx-auto" />,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <SectionTitle heading="Health Tips & Awareness" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {tips.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg text-center"
          >
            {item.icon}
            <h3 className="text-lg font-semibold mt-2">{item.tip}</h3>
            <p className="text-gray-600 mt-2">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
