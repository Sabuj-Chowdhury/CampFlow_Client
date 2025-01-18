import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Components/shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import JoinCampModal from "../../Components/Modal/JoinCampModal";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import { Helmet } from "react-helmet-async";
import { Button } from "@material-tailwind/react";

const CampDetails = () => {
  const { campId } = useParams();
  const { user } = useAuth();
  const { isAdmin } = useAdmin();
  const axiosPublic = useAxiosPublic();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

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
      {/* title */}
      <Helmet>
        <title>CampFlow | Camp Details</title>
      </Helmet>
      <div className="max-w-5xl flex flex-col lg:flex-row mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-full">
        {/* image */}
        <div className="w-full">
          <img
            src={imageURL}
            alt={campName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between p-6">
          <div>
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
          </div>
          <Button
            onClick={handleModalOpen}
            disabled={!user || isAdmin}
            className={`mt-6 w-full py-4 ${
              !user || isAdmin
                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                : "bg-teal-600 text-white"
            }`}
          >
            Join Camp
          </Button>
        </div>
      </div>

      {/* Join Camp Modal */}
      <JoinCampModal
        open={isModalOpen}
        onClose={handleModalClose}
        campDetails={campDetails}
        user={user}
      />
    </div>
  );
};

export default CampDetails;
