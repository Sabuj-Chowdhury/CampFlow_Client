import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserRegisterCampTable = ({ idx, registration, handleDelete }) => {
  // console.log(registration);

  const { camp_name, price, participant, status, _id } = registration || {};
  return (
    <tr className="hover:bg-gray-50 transition border-b border-gray-300">
      {/* serial */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">{idx + 1}</td>
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
        {status === "pending" ? (
          <div>
            <Link to={`/dashboard/pay/${_id}`}>
              <Button>Pay</Button>
            </Link>
          </div>
        ) : (
          <span className="text-teal-600 font-medium">Paid</span>
        )}
      </td>
      {/*  Confirmation Status */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">{status}</td>

      {/*   CANCEL button */}
      <td className="px-6 py-4 text-sm border-r border-gray-300">
        <Button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 text-white  hover:bg-red-700 transition"
        >
          Cancel
        </Button>
      </td>

      {/* FEEDBACK button */}
      <td className="px-6 py-4 text-sm">
        {status === "confirmed" ? (
          <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
            Leave Feedback
          </button>
        ) : (
          <span className="text-gray-400">Not Available</span>
        )}
      </td>
    </tr>
  );
};

export default UserRegisterCampTable;

UserRegisterCampTable.propTypes = {
  idx: PropTypes.number,
  handleDelete: PropTypes.func,

  registration: PropTypes.object,
};
