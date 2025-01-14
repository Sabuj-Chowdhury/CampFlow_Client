import { useState } from "react";

const SignUp = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-700">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-4xl font-bold text-teal-700 text-center mb-4">
          Create an Account
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Join us and explore more!
        </p>

        {/* Sign-Up Form */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
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
            <input
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
                  className="w-20 h-20 rounded-full object-cover"
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
            <input
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
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              placeholder="Create a password"
              required
            />
          </div>
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

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-teal-700 font-bold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
