import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PaymentHistoryTable = ({ idx, payment }) => {
  // console.log(registration);

  const { camp_name, price, participant, status, _id, payment_status } =
    payment || {};
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
        {payment_status === "pending" ? (
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
    </tr>
  );
};

export default PaymentHistoryTable;

PaymentHistoryTable.propTypes = {
  idx: PropTypes.number,

  payment: PropTypes.object,
};
