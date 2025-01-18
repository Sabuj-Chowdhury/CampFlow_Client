import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const ManageRegistrationTable = ({ index, registeredUser }) => {
  const [loading, setLoading] = useState(false);
  const { camp_name, price, participant, status, _id, payment_status } =
    registeredUser || {};

  // update handler
  const handleConfirmation = async (id) => {
    console.log(id);
  };

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
            Pending
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

      {/*   CANCEL button */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">
        {payment_status === "pending" ? (
          <Button className="bg-red-500 text-white  hover:bg-red-700 transition">
            Cancel
          </Button>
        ) : (
          <button
            disabled
            className="text-teal-600 font-medium text-center cursor-not-allowed"
          >
            Canceled
          </button>
        )}
      </td>
    </tr>
  );
};

export default ManageRegistrationTable;

ManageRegistrationTable.propTypes = {
  index: PropTypes.number,
  handleCustomDelete: PropTypes.func,
  registeredUser: PropTypes.object,
};
