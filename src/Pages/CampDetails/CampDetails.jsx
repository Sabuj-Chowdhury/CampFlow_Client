import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Components/shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CampDetails = () => {
  const { campId } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: campDetails, isLoading } = useQuery({
    queryKey: ["campDetails", campId],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/camp/${campId}`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const {
    campName,
    imageURL,
    price,
    date,
    time,
    location,
    professionalName,
    count,
    description,
  } = campDetails;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={imageURL}
          alt={campName}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-teal-700">{campName}</h1>
          <p className="text-gray-500 text-sm mb-4">
            Hosted by: <span className="font-medium">{professionalName}</span>
          </p>
          <p className="text-gray-600">{description}</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-gray-700 font-medium">Location:</p>
              <p>{location}</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Camp Fees:</p>
              <p>${price}</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Date:</p>
              <p>{date}</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Time:</p>
              <p>{time}</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Participants:</p>
              <p>{count} registered</p>
            </div>
          </div>
          <button className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition">
            Join Camp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
