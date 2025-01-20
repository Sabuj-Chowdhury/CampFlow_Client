import { useQuery } from "@tanstack/react-query";

import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import ManageCampTable from "./AdminTables/ManageCampTable";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";

import Pagination from "../../../Components/paginationUI/Pagination";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const ManageCamps = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const axiosPublic = useAxiosPublic();
  const itemsPerPage = 8;

  // console.log(search);

  const {
    data: manageCamp = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageCamp", search],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/camps?search=${search}`);
      return data;
    },
  });

  // handle reset
  const handleReset = () => {
    setSearch("");
  };

  // Calculate paginated data
  const totalPages = Math.ceil(manageCamp.length / itemsPerPage);
  const paginatedData = manageCamp.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

      <div>
        {/* Search Bar */}
        <div className="flex items-center gap-2 w-full md:w-10/12 mx-auto my-5 sm:w-full">
          <input
            onBlur={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search camps,doctors name, location..."
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
            <div>
              {/* table */}
              <div className="overflow-x-auto  rounded-lg min-h-[calc(100vh-220px)]">
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
                    {paginatedData.map((camp, index) => (
                      <ManageCampTable
                        key={index}
                        camp={camp}
                        index={index + (currentPage - 1) * itemsPerPage}
                        refetch={refetch}
                      ></ManageCampTable>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-8">
              <p>No camps found matching your search criteria.</p>
            </div>
          )}
        </div>

        {/* pagination */}
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

export default ManageCamps;
