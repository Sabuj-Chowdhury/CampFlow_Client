import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import UserRegisterCampTable from "../../../Components/Table/UserRegisterCampTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const RegisteredCamps = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // fetch registration data
  const {
    data: myRegistrations = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myRegistration", user.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/registration/${user.email}`);
      return data;
    },
  });

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

      {myRegistrations.length === 0 ? (
        // Default message when no registrations are found
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            You have no registered camps at the moment.
          </p>
          <Link to="/available-camps" className=" mt-4 px-6 py-2 text-blue-500">
            Explore Camps
          </Link>
        </div>
      ) : (
        // Table
        <div className="overflow-x-auto rounded-lg">
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
                  Action
                </th>
                <th className="px-6 py-3 text-sm font-medium">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {myRegistrations.map((registration, idx) => (
                <UserRegisterCampTable
                  key={idx}
                  registration={registration}
                  idx={idx}
                  handleCustomDelete={handleCustomDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RegisteredCamps;
