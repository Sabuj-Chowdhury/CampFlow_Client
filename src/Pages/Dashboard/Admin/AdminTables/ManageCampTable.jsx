import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageCampTable = ({ camp, index, refetch }) => {
  const axiosSecure = useAxiosSecure();

  //   console.log(camp);

  //   destructure
  const { campName, date, time, location, professionalName, _id } = camp || {};

  // Delete Camp
  const handleDelete = async (id) => {
    // console.log(id);
    try {
      // api call to delete
      const { data } = await axiosSecure.delete(`/camp/${id}`);

      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  const handleCustomDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
        Swal.fire({
          title: "Deleted!",
          text: "Camp has been canceled.",
          icon: "success",
        });
      }
    });
  };

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
        {/* delete */}
        <Button
          onClick={() => handleCustomDelete(_id)}
          className="bg-red-500 hover:bg-red-600 text-white  rounded-md flex items-center gap-1"
        >
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
  refetch: PropTypes.func,
};
