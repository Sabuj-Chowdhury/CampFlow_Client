import SectionTitle from "../shared/SectionTitle/SectionTitle";
import {
  FaUserMd,
  FaHeartbeat,
  FaHandsHelping,
  FaLeaf,
  FaMicroscope,
  FaStethoscope,
} from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. John Doe",
      role: "Chief Medical Officer",
      bio: "Over 20 years of experience in public health.",
      icon: <FaUserMd className="text-teal-600 text-3xl mx-auto" />,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RG9jdG9yc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Dr. Jane Smith",
      role: "Senior Surgeon",
      bio: "Specialist in life-saving surgeries in remote areas.",
      icon: <FaHeartbeat className="text-teal-600 text-3xl mx-auto" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHIuJTIwSmFuZSUyMFNtaXRofGVufDB8fDB8fHww",
    },
    {
      name: "Emily Brown",
      role: "Volunteer Coordinator",
      bio: "Manages and trains all volunteers for camps.",
      icon: <FaHandsHelping className="text-teal-600 text-3xl mx-auto" />,
      image:
        "https://plus.unsplash.com/premium_photo-1677165481551-c91ed6e15f09?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHIuJTIwRW1pbHklMjBCcm93bnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Mark Johnson",
      role: "Nutritionist",
      bio: "Provides dietary guidance for better health.",
      icon: <FaLeaf className="text-teal-600 text-3xl mx-auto" />,
      image:
        "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RHIuJTIwTWFyayUyMEpvaG5zb258ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Dr. Sarah Lee",
      role: "Medical Researcher",
      bio: "Leading innovative research in infectious diseases.",
      icon: <FaMicroscope className="text-teal-600 text-3xl mx-auto" />,
      image:
        "https://plus.unsplash.com/premium_photo-1664475543697-229156438e1e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHIuJTIwU2FyYWglMjBMZWV8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Dr. Alex Carter",
      role: "General Physician",
      bio: "Dedicated to providing primary healthcare services.",
      icon: <FaStethoscope className="text-teal-600 text-3xl mx-auto" />,
      image:
        "https://plus.unsplash.com/premium_photo-1661578535048-7a30e3a71d25?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RHIuJTIwQWxleCUyMENhcnRlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <SectionTitle heading="Meet Our Team" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto mb-4 h-24 w-24 object-cover rounded-full"
            />
            {member.icon}
            <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <p className="text-gray-600 mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
