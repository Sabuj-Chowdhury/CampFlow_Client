import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // handle google sign in
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const data = await signInWithGoogle();

      navigate(from, { replace: true });
      toast.success("Login Successful!");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center gap-3 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition"
      >
        <FaGoogle size={20} />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
