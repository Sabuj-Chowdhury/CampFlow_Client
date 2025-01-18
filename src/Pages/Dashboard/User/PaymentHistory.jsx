import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import PaymentHistoryTable from "./Table/PaymentHistoryTable";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: paymentHistory = [], isLoading } = useQuery({
    queryKey: ["paymentHistory", user.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/payments/${user.email}`);
      return data;
    },
  });

  // console.log(paymentHistory);
  return (
    <div className="max-w-7xl mx-auto">
      {/* title */}
      <Helmet>
        <title>CampFlow | Payments History</title>
      </Helmet>
      {/* page heading */}
      <SectionTitle heading="Payment history"></SectionTitle>

      {paymentHistory.length === 0 ? (
        // TODO : Change
        // Default message when no registrations are found
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
        // Table
        <div className="overflow-x-auto rounded-lg">
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
              {paymentHistory.map((payment, idx) => (
                <PaymentHistoryTable key={idx} payment={payment} idx={idx} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
