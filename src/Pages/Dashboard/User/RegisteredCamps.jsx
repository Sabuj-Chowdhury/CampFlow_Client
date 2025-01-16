import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";

import UserRegisterCampTable from "../../../Components/Table/UserRegisterCampTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const RegisteredCamps = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
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

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* title */}
      <Helmet>
        <title>CampFlow | Registered</title>
      </Helmet>
      {/* page heading */}
      <SectionTitle heading="Registered Camps"></SectionTitle>

      {/* table */}
      <div className="overflow-x-auto rounded-lg">
        {/* table */}
        <table className="table-auto mx-auto border border-gray-300 text-left">
          <thead className="bg-teal-600 text-white border-b border-gray-300">
            <tr>
              {/* serial */}
              <th className="border border-gray-200 px-4 py-2 text-left">
                Serial no
              </th>
              {/* camp name */}
              <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                Camp Name
              </th>
              {/* Camp Fees */}
              <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                Camp Fees
              </th>
              {/*  Participant Name */}
              <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                Participant Name
              </th>
              {/*  Payment Status */}
              <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                Payment Status
              </th>
              {/*  Confirmation Status */}
              <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                Confirmation Status
              </th>
              {/*   Action */}
              <th className="px-6 py-3 text-sm font-medium border-r border-gray-300">
                Action
              </th>
              {/* Feedback */}
              <th className="px-6 py-3 text-sm font-medium">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {myRegistrations.map((registration, idx) => (
              <UserRegisterCampTable
                key={idx}
                registration={registration}
                idx={idx}
              ></UserRegisterCampTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredCamps;
