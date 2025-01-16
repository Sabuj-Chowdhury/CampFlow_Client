import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/shared/SectionTitle/SectionTitle";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@material-tailwind/react";

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Navigation hook for redirection
  const axiosSecure = useAxiosSecure();

  // Fetch registration data for payment details
  const { data: payment = {}, isLoading } = useQuery({
    queryKey: ["myRegistration", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/registration/pay/${id}`);
      return data;
    },
  });

  // Destructure required data
  const { camp_name, price, location } = payment;

  // Handle pay now
  const handlePayNow = () => {
    console.log("Processing payment...");
  };

  // Handle cancel
  const handleCancel = () => {
    navigate("/dashboard/registered-camps"); // Redirect to registered camps
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Helmet>
        <title>CampFlow | Checkout</title>
      </Helmet>

      {/* Page Title */}
      <SectionTitle heading="Checkout" />

      {/* Checkout Form */}
      <form
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          handlePayNow();
        }}
      >
        {/* Camp Information */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Camp Details
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Camp Name
            </label>
            <input
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-gray-100"
              value={camp_name}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Camp location
            </label>
            <input
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-gray-100"
              value={location}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Total Price
            </label>
            <input
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-gray-100"
              value={`$${price}`}
              disabled
            />
          </div>
        </div>

        <div className="mt-6 flex flex-row gap-4">
          {/* Pay now button*/}
          <Button type="submit">Pay Now</Button>

          {/* cancel button */}
          <Button
            type="button"
            onClick={handleCancel}
            className=" text-gray-700 bg-gray-200 "
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
