import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/shared/SectionTitle/SectionTitle";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../Components/shared/LoadingSpinner/LoadingSpinner";
import { imageUpload } from "../../../../utils/ImageBB/imagebbAPI";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const UpdateCamp = () => {
  const { campId } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // Fetch camp data
  const {
    data: campData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["campData", campId],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/camp/${campId}`);
      return data;
    },
  });

  const {
    campName,
    price,
    date,
    time,
    location,
    professionalName,
    description,
    imageURL,
  } = campData;

  // update the camp data and redirect to '/mange-camp
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;

    // Collect form data
    const updatedCamp = {
      campName: form.campName.value,
      price: parseFloat(form.price.value),
      date: form.date.value,
      time: form.time.value,
      location: form.location.value,
      professionalName: form.professionalName.value,
      description: form.description.value,
      imageURL,
    };

    // Handle image upload if a new file is provided
    const image = form.image.files[0];
    if (image) {
      updatedCamp.imageURL = await imageUpload(image);
    }

    // console.log(updatedCamp);

    try {
      //api call to update data
      const { data } = await axiosSecure.put(`/camp/${campId}`, updatedCamp);
      console.log(data);
      setLoading(false);
      toast.success("Data updated successfully");
      refetch();
      navigate("/dashboard/manage-camps");
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading || loading) {
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
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-4"
      >
        {/* Camp Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-teal-700 font-medium mb-1">
              Camp Name
            </label>
            <input
              type="text"
              name="campName"
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
              name="image"
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
              name="price"
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
                name="date"
                defaultValue={date}
                className="w-1/2 p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
              />
              <input
                type="time"
                name="time"
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
            name="location"
            defaultValue={location}
            placeholder="Enter Location"
            className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
          />
        </div>

        {/* Professional Name */}
        <div>
          <label className="block text-teal-700 font-medium mb-1">
            Healthcare Professional Name
          </label>
          <input
            type="text"
            name="professionalName"
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
            name="description"
            defaultValue={description}
            placeholder="Enter Description"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            className="bg-teal-600 text-white  rounded hover:bg-teal-700"
          >
            Update Camp
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCamp;
