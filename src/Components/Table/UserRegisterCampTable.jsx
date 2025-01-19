import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserRegisterCampTable = ({ index, registration, handleCustomDelete }) => {
  // console.log(registration);

  const { camp_name, price, participant, status, _id, payment_status } =
    registration || {};
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
          <div>
            <Link to={`/dashboard/pay/${_id}`}>
              <Button>Pay</Button>
            </Link>
          </div>
        ) : (
          <span className="text-teal-600 font-medium text-center cursor-not-allowed">
            Paid
          </span>
        )}
      </td>
      {/*  Confirmation Status */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">{status}</td>

      {/*   CANCEL button */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">
        {payment_status === "pending" ? (
          <Button
            onClick={() => handleCustomDelete(_id)}
            className="bg-red-500 text-white  hover:bg-red-700 transition"
          >
            Cancel
          </Button>
        ) : (
          <button
            disabled
            className="text-teal-600 font-medium text-center cursor-not-allowed"
          >
            Not allowed
          </button>
        )}
      </td>

      {/* should i take a attribute to manage review only one time ? */}

      {/* FEEDBACK button */}
      <td className="px-6 py-4 text-sm">
        {status === "confirmed" ? (
          <Link to={`/dashboard/add-review/${_id}`}>
            <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
              Leave Feedback
            </button>
          </Link>
        ) : (
          <span className="text-gray-400  text-center cursor-not-allowed">
            Not Available
          </span>
        )}
      </td>
    </tr>
  );
};

export default UserRegisterCampTable;

UserRegisterCampTable.propTypes = {
  index: PropTypes.number,
  handleCustomDelete: PropTypes.func,

  registration: PropTypes.object,
};
