// import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "../../Components/shared/LoadingSpinner/LoadingSpinner";
import SocialLogin from "../../Components/shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    setLoading(true);
    // console.log(data);
    const { email, password } = data;
    // console.log(email, password);
    try {
      //sign in with email and password
      await signIn(email, password);

      navigate(from, { replace: true });
      toast.success("Login Successful!");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    // outer container
    <section className="min-h-screen flex items-center justify-center bg-teal-700">
      {/* title */}
      <Helmet>
        <title>CampFlow | Sign in</title>
      </Helmet>
      {/* card container */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-4xl font-bold text-teal-700 text-center mb-4">
          Welcome Back
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Please sign in to continue
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("password")}
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-2 px-4 rounded-lg font-bold text-lg hover:bg-teal-800 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="border-t border-gray-300 flex-grow"></div>
          <p className="text-gray-600 mx-4">or</p>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Social Login */}
        <SocialLogin></SocialLogin>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?
          <a href="/signup" className="text-teal-700 font-bold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
