import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageCampTable = ({ camp, index }) => {
  console.log(camp);

  //   destructure
  const { campName, date, time, location, professionalName } = camp || {};
  return (
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-200 px-4 py-2">{index + 1}</td>
      <td className="border border-gray-200 px-4 py-2">{campName}</td>
      <td className="border border-gray-200 px-4 py-2">
        {date} | {time}
      </td>
      <td className="border border-gray-200 px-4 py-2">{location}</td>
      <td className="border border-gray-200 px-4 py-2">{professionalName}</td>
      <td className="border border-gray-200 px-4 py-2 flex items-center gap-2">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center gap-1">
          <FaEdit /> Edit
        </Button>
        <Button className="bg-red-500 hover:bg-red-600 text-white  rounded-md flex items-center gap-1">
          <FaTrashAlt /> Delete
        </Button>
      </td>
    </tr>
  );
};

export default ManageCampTable;

ManageCampTable.propTypes = {
  index: PropTypes.number,

  camp: PropTypes.object,
};
