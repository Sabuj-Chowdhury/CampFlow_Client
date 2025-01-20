import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import PaymentHistoryTable from "./Table/PaymentHistoryTable";
import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import { useState } from "react";
import Pagination from "../../../Components/paginationUI/Pagination";
import { Button } from "@material-tailwind/react";

const PaymentHistory = () => {
  const { user } = useAuth();

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure();
  const itemsPerPage = 8;

  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["paymentHistory", user.email, search],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/payments/${user.email}?search=${search}`
      );
      return data;
    },
  });

  const { paymentHistory = [], allPayments = [] } = data;
  // console.log("all :", allPayments.length);
  // console.log("paginate", paymentHistory.length);

  // handle reset
  const handleReset = () => {
    setSearch("");
  };

  // Calculate paginated data
  const totalPages = Math.ceil(paymentHistory.length / itemsPerPage);
  const paginatedData = paymentHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // console.log(paginatedData);

  if (isLoading) {
    <LoadingSpinner></LoadingSpinner>;
  }

  // console.log(paymentHistory);
  return (
    <div className="max-w-7xl mx-auto">
      {/* title */}
      <Helmet>
        <title>CampFlow | Payments History</title>
      </Helmet>
      {/* page heading */}
      <SectionTitle heading="Payment history"></SectionTitle>

      {/* Default message when no Payments are found */}
      <div>
        {allPayments.length === 0 ? (
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              You have not made any Payment yet.
            </p>
            <Link
              to="/dashboard/registered-camps"
              className=" mt-4 px-6 py-2 text-blue-500"
            >
              Registered Camps
            </Link>
          </div>
        ) : (
          <div>
            {/* Search Bar */}
            <div className="flex items-center gap-2 w-full md:w-10/12 mx-auto my-5 sm:w-full">
              <input
                onBlur={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search camps..."
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
              {paginatedData.length === 0 ? (
                //   no search result
                <div className="text-center mt-12">
                  <p className="text-lg text-gray-700">
                    No data found matching your search.
                  </p>
                </div>
              ) : (
                //   Table
                <div className="overflow-x-auto rounded-lg min-h-[calc(100vh-300px)]">
                  <table className="table-auto mx-auto border border-gray-300 text-center">
                    <thead className="bg-teal-600 text-white border-b border-gray-300">
                      <tr>
                        <th className="border border-gray-200 px-4 py-2 text-left">
                          Serial no
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
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedData.map((payment, idx) => (
                        <PaymentHistoryTable
                          key={idx}
                          payment={payment}
                          idx={idx + (currentPage - 1) * itemsPerPage}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* pagination */}
            <div className="flex items-center justify-center my-5">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
