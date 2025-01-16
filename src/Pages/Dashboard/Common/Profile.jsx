import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import UpdateProfileModal from "../../../Components/Modal/UpdateProfileModal";

const Profile = () => {
  const { user } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-10">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img
              src={user?.photoURL}
              alt={user.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-teal-600"
            />
          </div>

          {/* User Information */}
          <div className="flex-grow">
            <h2 className="text-3xl font-bold text-teal-700 mb-4">
              {user.displayName}
            </h2>

            <p className="text-gray-600 text-lg mb-2">
              <span className="font-medium">Email:</span> {user.email}
            </p>

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

      {/* modal for update */}

      <UpdateProfileModal
        open={isModalOpen}
        onClose={handleModalClose}
        user={user}
      ></UpdateProfileModal>
    </div>
  );
};

export default Profile;
