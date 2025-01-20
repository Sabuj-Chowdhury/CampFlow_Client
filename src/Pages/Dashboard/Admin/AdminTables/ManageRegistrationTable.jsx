import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import LoadingSpinner from "../../../../Components/shared/LoadingSpinner/LoadingSpinner";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageRegistrationTable = ({ index, registeredUser, refetch }) => {
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { camp_name, price, participant, status, _id, payment_status } =
    registeredUser || {};

  // update handler
  const handleConfirmation = async (id) => {
    setLoading(true);

    try {
      await axiosSecure.patch(`/registration/${id}`);
      refetch();
      toast.success("Confirmed successfully!");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    // console.log(id);
  };

  // cancel/DELETE handler
  const handleDelete = async (id) => {
    setLoading(true);

    try {
      await axiosSecure.delete(`/registration/${id}`);
      refetch();
      toast.success("deleted successfully!");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    // console.log(id);
  };

  const handleCustomDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
        Swal.fire({
          title: "Canceled!",
          text: "Registration has been canceled.",
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <tr className="hover:bg-gray-50 transition border-b border-gray-300">
      {/* serial */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">
        {index + 1}
      </td>
      {/* camp name */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">
        {camp_name}
      </td>
      {/* Camp Fees */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">${price}</td>
      {/*  Participant Name */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">
        {participant.name}
      </td>
      {/*  Payment Status */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">
        {payment_status === "pending" ? (
          <span className="text-teal-600 font-medium text-center cursor-not-allowed">
            Unpaid
          </span>
        ) : (
          <span className="text-teal-600 font-medium text-center cursor-not-allowed">
            Paid
          </span>
        )}
      </td>
      {/*  Confirmation Status */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">
        {status === "pending" ? (
          <Button onClick={() => handleConfirmation(_id)}>Pending</Button>
        ) : (
          <Button
            disabled
            className="bg-[#0000ff] text-center cursor-not-allowed"
          >
            Confirmed
          </Button>
        )}
      </td>

      {/* CANCEL button */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">
        {payment_status === "paid" && status === "confirmed" ? (
          <button
            disabled
            className="text-teal-600 font-medium text-center cursor-not-allowed"
          >
            Cannot Cancel
          </button>
        ) : (
          <Button
            onClick={() => handleCustomDelete(_id)}
            className="bg-red-500 text-white hover:bg-red-700 transition"
          >
            Cancel
          </Button>
        )}
      </td>
    </tr>
  );
};

export default ManageRegistrationTable;

ManageRegistrationTable.propTypes = {
  index: PropTypes.number,
  refetch: PropTypes.func,
  registeredUser: PropTypes.object,
};
