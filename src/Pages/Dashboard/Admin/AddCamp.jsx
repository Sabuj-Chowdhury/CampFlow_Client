import { useForm } from "react-hook-form";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import { imageUpload } from "../../../utils/ImageBB/imagebbAPI";

import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddCamp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);

    // console.log(data);
    const image = data.image[0];
    const imageURL = await imageUpload(image);
    const formData = { ...image, ...data, imageURL };
    const { image: _, dateTime, campFees, ...rest } = formData;
    const price = parseFloat(campFees);
    const dateObject = new Date(dateTime);
    const date = dateObject.toLocaleDateString("en-GB");
    const time = dateObject
      .toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
      .replace(":", ".");

    const campData = {
      ...rest,
      price,
      date,
      time,
      count: 0,
    };
    // console.log(campData);
    // save data in db
    try {
      await axiosSecure.post("/add-camp", campData);
      toast.success("Camp Added Successfully!");
      navigate("/dashboard/manage-camps");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
      {/* title */}
      <Helmet>
        <title>Dashboard | Add Camp</title>
      </Helmet>

      <div className="bg-white shadow-lg rounded-lg w-full max-w-7xl flex flex-col lg:flex-row overflow-hidden">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-4xl font-semibold text-center mb-6">
              Add New Campaign
            </h2>

            {/* Camp Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Camp Name
              </label>
              <input
                type="text"
                {...register("campName", {
                  required: "Camp name is required",
                })}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.campName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.campName.message}
                </p>
              )}
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Camp Image
              </label>
              <input
                type="file"
                required
                {...register("image")}
                onChange={handleImageChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {selectedImage && (
                <div className="mt-3">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-20 h-20  object-contain"
                  />
                </div>
              )}
            </div>

            {/* Camp Fees */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Camp Fees
              </label>
              <input
                type="number"
                {...register("campFees", {
                  required: "Camp fees are required",
                  min: { value: 0, message: "Fees must be a positive number" },
                })}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.campFees && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.campFees.message}
                </p>
              )}
            </div>

            {/* Date & Time */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Date & Time
              </label>
              <input
                type="datetime-local"
                {...register("dateTime", {
                  required: "Date & Time are required",
                })}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.dateTime && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dateTime.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                {...register("location", {
                  required: "Location is required",
                })}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Healthcare Professional Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Healthcare Professional Name
              </label>
              <input
                type="text"
                {...register("professionalName", {
                  required: "Healthcare Professional name is required",
                })}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.professionalName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.professionalName.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                rows="4"
                {...register("description", {
                  required: "Description is required",
                })}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition"
            >
              Add Campaign
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCamp;
