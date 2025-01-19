import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../Components/shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import {
  FaCampground,
  FaMoneyBillWave,
  FaCheckCircle,
  FaHourglassHalf,
  FaDollarSign,
  FaTimesCircle,
} from "react-icons/fa";
import RegistrationPieChart from "./Charts/RegistrationPieChart";
import ConfirmationBarChart from "./Charts/ConfirmationBarChart";

const Analytics = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: userStats = {}, isLoading } = useQuery({
    queryKey: ["userStats", user.email],
    queryFn: async () => {
      const { data } = await axiosPublic(`/user-stats/${user.email}`);
      return data;
    },
  });

  const defaultStats = {
    totalCamps: 0,
    totalSpent: 0,
    confirmedCount: 0,
    pendingCount: 0,
    Paid: 0,
    unpaid: 0,
  };

  const stats = Object.keys(userStats).length === 0 ? defaultStats : userStats;

  const statusData = [
    { name: "Confirmed", value: userStats.confirmedCount || 0 },
    { name: "Pending", value: userStats.pendingCount || 0 },
  ];

  const paymentData = [
    { name: "Paid", value: userStats.Paid || 0 },
    { name: "Unpaid", value: userStats.unpaid || 0 },
  ];

  const COLORS = ["#14b8a6", "#fdba74", "#2dd4bf", "#f87171"];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      {/* Page Title */}
      <Helmet>
        <title>CampFlow | Analytics</title>
      </Helmet>

      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-teal-700">
          Welcome, <span className="text-orange-500">{user.displayName}</span>!
        </h1>
        <p className="text-base text-gray-600">
          Dive into your analytics and track your participation at a glance.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {/* Total Camps */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 flex items-center fixed-h-40">
          <FaCampground className="text-teal-600 text-2xl mr-3" />
          <div>
            <h2 className="text-xl font-bold text-teal-700">Total Camps</h2>
            <p className="text-2xl font-bold text-teal-600">
              {stats.totalCamps}
            </p>
          </div>
        </div>

        {/* Total Spent */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 flex items-center fixed-h-40">
          <FaMoneyBillWave className="text-orange-500 text-2xl mr-3" />
          <div>
            <h2 className="text-xl font-bold text-teal-700">Total Spent</h2>
            <p className="text-2xl font-bold text-orange-500">
              ${stats.totalSpent}
            </p>
          </div>
        </div>

        {/* Confirmed Registrations */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 flex items-center fixed-h-40">
          <FaCheckCircle className="text-teal-600 text-2xl mr-3" />
          <div>
            <h2 className="text-xl font-bold text-teal-700">
              Confirmed Registrations
            </h2>
            <p className="text-2xl font-bold text-teal-600">
              {stats.confirmedCount}
            </p>
          </div>
        </div>

        {/* Pending Registrations */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 flex items-center fixed-h-40">
          <FaHourglassHalf className="text-orange-500 text-2xl mr-3" />
          <div>
            <h2 className="text-xl font-bold text-teal-700">
              Pending Registrations
            </h2>
            <p className="text-2xl font-bold text-orange-500">
              {stats.pendingCount}
            </p>
          </div>
        </div>

        {/* Paid */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 flex items-center fixed-h-40">
          <FaDollarSign className="text-teal-600 text-2xl mr-3" />
          <div>
            <h2 className="text-xl font-bold text-teal-700">Paid</h2>
            <p className="text-2xl font-bold text-teal-600">{stats.Paid}</p>
          </div>
        </div>

        {/* Unpaid */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 flex items-center fixed-h-40">
          <FaTimesCircle className="text-orange-500 text-2xl mr-3" />
          <div>
            <h2 className="text-xl font-bold text-teal-700">Unpaid</h2>
            <p className="text-2xl font-bold text-orange-500">{stats.unpaid}</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        {/* Pie Chart */}
        <RegistrationPieChart
          statusData={statusData}
          COLORS={COLORS}
        ></RegistrationPieChart>

        {/* Payment Status Bar Chart */}

        <ConfirmationBarChart paymentData={paymentData}></ConfirmationBarChart>
      </div>
    </div>
  );
};

export default Analytics;
