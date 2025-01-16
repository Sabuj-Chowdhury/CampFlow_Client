import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import UpdateProfileModal from "../../../Components/Modal/UpdateProfileModal";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";

const Profile = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  // get user data
  const {
    data: profile,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["profile", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user.email}`);
      return data;
    },
  });

  const { email, image, phone, address, name } = profile || {};

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* title */}
      <Helmet>
        <title>CampFlow | Profile</title>
      </Helmet>

      {/* page heading */}
      <div className="bg-white shadow-md py-4 px-6">
        <SectionTitle heading="Profile"></SectionTitle>
      </div>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-10">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img
                src={image}
                alt={name}
                className="w-40 h-40 rounded-full object-cover border-4 border-teal-600"
              />
            </div>

            {/* User Information */}
            <div className="flex-grow">
              <h2 className="text-3xl font-bold text-teal-700 mb-4">{name}</h2>

              <p className="text-gray-600 text-lg mb-2">
                <span className="font-medium">Email:</span> {email}
              </p>

              {phone && (
                <p className="text-gray-600 text-lg mb-2">
                  <span className="font-medium">Phone Number:</span> {phone}
                </p>
              )}

              {address && (
                <p className="text-gray-600 text-lg mb-2">
                  <span className="font-medium">Address:</span> {address}
                </p>
              )}

              {/* Update Button */}
              <button
                onClick={handleModalOpen}
                className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-all"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal for update */}
      <UpdateProfileModal
        open={isModalOpen}
        onClose={handleModalClose}
        profile={profile}
        refetch={refetch}
      ></UpdateProfileModal>
    </div>
  );
};

export default Profile;
