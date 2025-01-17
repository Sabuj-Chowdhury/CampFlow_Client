import { useForm } from "react-hook-form";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import { imageUpload } from "../../../utils/ImageBB/imagebbAPI";

import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";
import { Button } from "@material-tailwind/react";

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
    const { image: _, campFees, ...rest } = formData;
    const price = parseFloat(campFees);

    const campData = {
      ...rest,
      price,

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
    <div className="max-w-7xl mx-auto p-4">
      {/* title */}
      <Helmet>
        <title>Dashboard | Add Camp</title>
      </Helmet>

      {/* Page Heading */}
      <SectionTitle heading="Add Campaign" />

      {/* form */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Camp Name */}
          <div>
            <label className="block text-teal-700 font-medium mb-1">
              Camp Name
            </label>

            <input
              type="text"
              {...register("campName", {
                required: "Camp name is required",
              })}
              className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
              placeholder="Enter Camp Name"
            />

            {errors.campName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.campName.message}
              </p>
            )}
          </div>
          {/* Image Upload */}
          <div>
            <label className="block text-teal-700 font-medium mb-1">
              Image
            </label>

            <input
              type="file"
              required
              {...register("image")}
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
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
        </div>

        {/* Camp Fees and Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Camp Fees */}
          <div>
            <label className="block text-teal-700 font-medium mb-1">
              Camp Fees
            </label>

            <input
              type="number"
              {...register("campFees", {
                required: "Camp fees are required",
                min: { value: 0, message: "Fees must be a positive number" },
              })}
              placeholder="Enter Camp Fees"
              className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
            />
            {errors.campFees && (
              <p className="text-red-500 text-sm mt-1">
                {errors.campFees.message}
              </p>
            )}
          </div>

          {/* Date & Time */}
          <div>
            <label className="block text-teal-700 font-medium mb-1">
              Date & Time
            </label>
            <div className="flex space-x-2">
              {/* Date */}
              <input
                type="date"
                {...register("date", { required: "Date is required" })}
                className="w-1/2 p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}

              {/* Time */}
              <input
                type="time"
                {...register("time", { required: "Time is required" })}
                className="w-1/2 p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.time.message}
                </p>
              )}
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
            {...register("location", {
              required: "Location is required",
            })}
            placeholder="Enter Location"
            className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* Healthcare Professional Name */}
        <div>
          <label className="block text-teal-700 font-medium mb-1">
            Healthcare Professional Name
          </label>
          <input
            type="text"
            placeholder="Enter Professional Name"
            className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
            {...register("professionalName", {
              required: "Healthcare Professional name is required",
            })}
          />
          {errors.professionalName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.professionalName.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-teal-700 font-medium mb-1">
            Description
          </label>

          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Enter Description"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:border-teal-500 focus:ring-teal-500"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            className="bg-teal-600 text-white  rounded hover:bg-teal-700"
          >
            Add Camp
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCamp;
