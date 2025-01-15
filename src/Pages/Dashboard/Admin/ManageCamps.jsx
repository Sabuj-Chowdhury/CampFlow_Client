import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ManageCamps = () => {
  const axiosPublic = useAxiosPublic();

  const { data: manageCamp = [], isLoading } = useQuery({
    queryKey: ["manageCamp"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/camps");
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Manage Camps</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-md rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">#</th>
              <th className="border border-gray-200 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left">
                Date & Time
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left">
                Location
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left">
                Healthcare Professional
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {manageCamp.map((camp, index) => (
              <tr key={camp._id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {camp.campName}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {camp.date} | {camp.time}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {camp.location}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {camp.professionalName}
                </td>
                <td className="border border-gray-200 px-4 py-2 flex items-center gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md flex items-center gap-1">
                    <FaEdit /> Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center gap-1">
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCamps;
