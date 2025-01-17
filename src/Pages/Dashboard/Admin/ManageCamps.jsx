import { useQuery } from "@tanstack/react-query";

import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ManageCampTable from "./AdminTables/ManageCampTable";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";

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
      <Helmet>
        <title>CampFlow | ManageCamp</title>
      </Helmet>

      {/* page heading */}
      <SectionTitle heading="Manage campaign" />
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-md rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-center">
                #
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center">
                Name
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center">
                Date & Time
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center">
                Location
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center">
                Healthcare Professional
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center">
                Update/Delete
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
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
    </div>
  );
};

export default ManageCamps;
