import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import UserRegisterCampTable from "../../../Components/Table/UserRegisterCampTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../../../Components/paginationUI/Pagination";
import { Button } from "@material-tailwind/react";

const RegisteredCamps = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // const [hasRegistrations, setHasRegistrations] = useState(false);

  const axiosSecure = useAxiosSecure();
  const itemsPerPage = 6;

  // fetch registration data
  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myRegistration", user.email, search],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/registration/${user.email}?search=${search}`
      );
      // setHasRegistrations(data.length > 0);
      return data;
    },
  });

  const { myRegistrations = [], allRegistrations = [] } = data;
  // console.log("all :", allRegistrations.length);
  // console.log("paginate", myRegistrations.length);

  // console.log(myRegistrations);

  // handle reset
  const handleReset = () => {
    setSearch("");
  };

  // cancel registration

  const handleDelete = async (id) => {
    // console.log(id);
    try {
      // api call to cancel
      await axiosSecure.delete(`/registration/${id}`);

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
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
        Swal.fire({
          title: "Canceled!",
          text: "Your registration has been canceled.",
          icon: "success",
        });
      }
    });
  };

  // Calculate paginated data
  const totalPages = Math.ceil(myRegistrations.length / itemsPerPage);
  const paginatedData = myRegistrations.slice(
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
        <title>CampFlow | Registered</title>
      </Helmet>

      {/* page heading */}
      <SectionTitle heading="Registered Camps" />

      {/* Default if there is no registration data */}
      {allRegistrations.length === 0 ? (
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            You have no registered camps at the moment.
          </p>
          <Link to="/available-camps" className=" mt-4 px-6 py-2 text-blue-500">
            Explore Camps
          </Link>
        </div>
      ) : (
        <div>
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

            {/* if there is no paginate data */}
            <div>
              {paginatedData.length === 0 ? (
                <div className="text-center mt-12">
                  <p className="text-lg text-gray-700">
                    No data found matching your search.
                  </p>
                </div>
              ) : (
                // table
                <div className="overflow-x-auto rounded-lg min-h-[calc(100vh-300px)]">
                  <table className="table-auto mx-auto border border-gray-300 text-left">
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
                        <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                          Cancel
                        </th>
                        <th className="px-6 py-3 text-sm font-medium">
                          Feedback
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedData.map((registration, index) => (
                        <UserRegisterCampTable
                          key={index}
                          registration={registration}
                          index={index + (currentPage - 1) * itemsPerPage}
                          handleCustomDelete={handleCustomDelete}
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
        </div>
      )}
    </div>
  );
};

export default RegisteredCamps;
