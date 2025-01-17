import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/shared/SectionTitle/SectionTitle";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../Components/shared/LoadingSpinner/LoadingSpinner";

const UpdateCamp = () => {
  const { campId } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: campData = {}, isLoading } = useQuery({
    queryKey: ["campData", campId],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/camp/${campId}`);
      return data;
    },
  });

  const {
    campName,
    imageURL,
    price,
    date,
    time,
    location,
    professionalName,
    description,
  } = campData;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Helmet>
        <title>CampFlow | Update Camp</title>
      </Helmet>

      {/* Page Heading */}
      <SectionTitle heading="Update Campaign" />

      {/* Update Form */}
      <form className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-4">
        {/* Camp Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-teal-700 font-medium mb-1">
              Camp Name
            </label>
            <input
              type="text"
              defaultValue={campName}
              placeholder="Enter Camp Name"
              className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-teal-700 font-medium mb-1">
              Image
            </label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Camp Fees and Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-teal-700 font-medium mb-1">
              Camp Fees
            </label>
            <input
              type="number"
              defaultValue={price}
              placeholder="Enter Camp Fees"
              className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-teal-700 font-medium mb-1">
              Date & Time
            </label>
            <div className="flex space-x-2">
              <input
                type="date"
                defaultValue={date}
                className="w-1/2 p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
              />
              <input
                type="time"
                defaultValue={time}
                className="w-1/2 p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-teal-700 font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            defaultValue={location}
            placeholder="Enter Location"
            className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
          />
        </div>

        {/* Healthcare Professional Name */}
        <div>
          <label className="block text-teal-700 font-medium mb-1">
            Healthcare Professional Name
          </label>
          <input
            type="text"
            defaultValue={professionalName}
            placeholder="Enter Professional Name"
            className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-teal-700 font-medium mb-1">
            Description
          </label>
          <textarea
            defaultValue={description}
            placeholder="Enter Description"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
          >
            Update Camp
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCamp;
