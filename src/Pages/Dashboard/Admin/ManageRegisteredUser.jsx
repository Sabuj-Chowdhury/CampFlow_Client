import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";
import ManageRegistrationTable from "./AdminTables/ManageRegistrationTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import Pagination from "../../../Components/paginationUI/Pagination";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const ManageRegisteredUser = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const axiosSecure = useAxiosSecure();
  const itemsPerPage = 6;

  // console.log(search);

  // fetch registration data
  const {
    data: registeredUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["registeredUsers", search],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/registrations?search=${search}`);
      return data;
    },
  });

  // handle reset
  const handleReset = () => {
    setSearch("");
  };

  // Calculate paginated data
  const totalPages = Math.ceil(registeredUsers.length / itemsPerPage);
  const paginatedData = registeredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

      <div>
        {/* Search Bar */}
        <div className="flex items-center gap-2 w-full md:w-10/12 mx-auto my-5 sm:w-full">
          <input
            onBlur={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search camps,participant name, payment status,status..."
            className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
          />
          <button
            onClick={() => refetch()}
            className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition"
          >
            Search
          </button>
          {/* reset */}
          <Button onClick={handleReset}>Reset</Button>
        </div>

        <div>
          {paginatedData.length > 0 ? (
            <div className="overflow-x-auto rounded-lg min-h-[calc(100vh-220px)]">
              {/* table */}
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
                  {paginatedData.map((registeredUser, index) => (
                    <ManageRegistrationTable
                      key={index}
                      registeredUser={registeredUser}
                      index={index + (currentPage - 1) * itemsPerPage}
                      refetch={refetch}
                    ></ManageRegistrationTable>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-8">
              <p>No camps found matching your search criteria.</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageRegisteredUser;
