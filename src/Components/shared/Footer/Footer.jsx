import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white text-center py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo and Name */}
        <div className="flex flex-col items-center mb-4">
          <img src={logo} alt="Logo" className="h-14 w-16 object-cover mb-2" />
          <h2 className="text-2xl font-bold">CampFlow</h2>
          <p className="text-lg italic">
            Simplifying Medical Camp Management for All
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/sabuj-chowdhury-8524a1b4/"
            aria-label="GitHub"
            className="text-white hover:text-gray-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.facebook.com/sc2706r/"
            aria-label="Facebook"
            className="text-white hover:text-gray-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://x.com/SabujChowd5499"
            aria-label="Twitter"
            className="text-white hover:text-gray-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        <div className="border-t border-white my-4" />

        <p className="text-sm">
          &copy; {new Date().getFullYear()} CampFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
