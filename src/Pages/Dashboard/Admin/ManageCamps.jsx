import { useQuery } from "@tanstack/react-query";

import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ManageCampTable from "./AdminTables/ManageCampTable";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const ManageCamps = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: manageCamp = [],
    isLoading,
    refetch,
  } = useQuery({
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
    <div className="max-w-7xl mx-auto">
      {/* title */}
      <Helmet>
        <title>CampFlow | ManageCamp</title>
      </Helmet>

      {/* page heading */}
      <SectionTitle heading="Manage campaign" />

      {manageCamp.length === 0 ? (
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            You have not added any camps at the moment.
          </p>
          <Link
            to="/dashboard/add-camp"
            className=" mt-4 px-6 py-2 text-blue-500"
          >
            add Camp
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto  rounded-lg">
          <table className="table-auto w-full mx-auto border border-gray-300 text-center">
            <thead className="bg-teal-600 text-white border-b border-gray-300">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-center">
                  #
                </th>
                <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                  Camp Name
                </th>
                <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                  Location
                </th>
                <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                  Healthcare Professional
                </th>
                <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                  Update/Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {manageCamp.map((camp, index) => (
                <ManageCampTable
                  key={index}
                  camp={camp}
                  index={index}
                  refetch={refetch}
                ></ManageCampTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageCamps;
