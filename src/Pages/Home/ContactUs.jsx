import SectionTitle from "../../Components/shared/SectionTitle/SectionTitle";
import { Button } from "@material-tailwind/react";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      {/* Section Title */}
      <SectionTitle heading="Get in Touch" />

      {/* Subheading */}
      <p className="text-center text-gray-600 text-lg mb-10">
        Have any questions about our medical camps? Need assistance or want to
        collaborate? Reach out to us using the form below. We’re here to help!
      </p>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm outline-none"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm outline-none"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Type your message here..."
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              className=" bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>

      {/* Contact Details */}
      <div className="text-center mt-10">
        <h3 className="text-xl font-medium text-gray-700 mb-3">
          Need Immediate Assistance?
        </h3>
        <p className="text-gray-600 mb-4">
          You can also reach us directly via phone or email for urgent
          inquiries.
        </p>
        <p className="text-gray-800 font-semibold">
          Phone: +1 (800) 123-4567 | Email: contact@campflow.org
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
