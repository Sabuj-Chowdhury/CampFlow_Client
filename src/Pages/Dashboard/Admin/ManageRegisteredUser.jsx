import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";
import ManageRegistrationTable from "./AdminTables/ManageRegistrationTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";

const ManageRegisteredUser = () => {
  const axiosSecure = useAxiosSecure();

  // fetch registration data
  const {
    data: registeredUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["registeredUsers"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/registrations`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* title */}
      <Helmet>
        <title>CampFlow | Manage Registration</title>
      </Helmet>

      {/* page heading */}
      <SectionTitle heading="registered user" />

      {registeredUsers.length === 0 ? (
        <div className="text-center mt-12">
          <p className="text-2xl text-gray-700">No registered user yet!</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg">
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
                  Camp Fees
                </th>
                <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                  Participant Name
                </th>
                <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                  Payment Status
                </th>
                <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                  Confirmation Status
                </th>
                <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                  Cancel
                </th>
              </tr>
            </thead>
            <tbody>
              {registeredUsers.map((registeredUser, index) => (
                <ManageRegistrationTable
                  key={index}
                  registeredUser={registeredUser}
                  index={index}
                ></ManageRegistrationTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageRegisteredUser;
