import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../utils/ImageBB/imagebbAPI";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import LoadingSpinner from "../../Components/shared/LoadingSpinner/LoadingSpinner";

const SignUp = () => {
  const { createUser, updateUserProfile, logOut } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const image = data.image[0];
    // console.log(image);
    const imageURL = await imageUpload(image);
    const userData = { ...image, ...data, imageURL };
    const { email, password, name, imageURL: photoURL } = userData;
    // console.log(email, password, name, photoURL);

    try {
      // User Registration
      const data = await createUser(email, password);

      // Save username & profile photo
      await updateUserProfile(name, photoURL);

      // Save user data in the DB

      // toast
      toast.success("Sign up successful, Log in Now!");

      // log out user
      await logOut();

      // redirect user to log in page to login
      navigate("/login");
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
    <div className="min-h-screen flex items-center justify-center bg-teal-700">
      {/* title */}
      <Helmet>
        <title>CampFlow | Sign Up</title>
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-4xl font-bold text-teal-700 text-center mb-4">
          Create an Account
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Join us and explore more!
        </p>

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            {/* name */}
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-semibold mb-2"
            >
              Profile Image
            </label>
            {/* image */}
            <input
              {...register("image")}
              required
              type="file"
              id="image"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              onChange={handleImageChange}
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
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            {/* email */}
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            {/* password */}
            <input
              {...register("password", {
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
                minLength: 6,
              })}
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              placeholder="Create a password"
              required
            />
          </div>
          {errors.password && (
            <span>
              password must be at least 6 character must include one uppercase,
              one lowercase and at least one digit
            </span>
          )}

          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-2 px-4 rounded-lg font-bold text-lg hover:bg-teal-800 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="border-t border-gray-300 flex-grow"></div>
          <p className="text-gray-600 mx-4">or</p>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* option to redirect to login page */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?
          <a href="/login" className="text-teal-700 font-bold hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
