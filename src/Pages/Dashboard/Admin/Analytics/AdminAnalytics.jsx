import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../Components/shared/LoadingSpinner/LoadingSpinner";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Helmet } from "react-helmet-async";
import {
  FaCampground,
  FaCheckCircle,
  FaDollarSign,
  FaHourglassHalf,
  FaMoneyBillWave,
  FaTimesCircle,
} from "react-icons/fa";

const AdminAnalytics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: adminStats = {}, isLoading } = useQuery({
    queryKey: ["userStats"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/admin-stats`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Pie Chart Data (Paid vs Unpaid Registrations)
  const pieData = [
    { name: "Paid Registrations", value: adminStats.paidRegistrations },
    { name: "Unpaid Registrations", value: adminStats.unpaidRegistrations },
  ];

  // Bar Chart Data (General Stats)
  const barData = [
    { name: "Total Users", value: adminStats.totalUsers },
    { name: "Total Registrations", value: adminStats.totalRegistrations },
    { name: "Total Camps", value: adminStats.totalCamps },
    { name: "Total Revenue", value: adminStats.totalRevenue },
  ];

  const COLORS = ["#0088FE", "#FF8042"]; // Colors for Pie Chart

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <Helmet>
        <title>CampFlow | Analytics</title>
      </Helmet>

      {/* Greeting Admin */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-teal-700">
          Welcome, <span className="text-orange-500">Admin</span>!
        </h1>
        <p className="text-base text-gray-600">Dive into your analytics</p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {/* Total Camps */}
        <StatCard
          title="Total Camps"
          value={adminStats.totalCamps}
          icon={<FaCampground />}
          color="text-teal-600"
        />
        {/* Total Revenue */}
        <StatCard
          title="Total Revenue"
          value={`$${adminStats.totalRevenue}`}
          icon={<FaMoneyBillWave />}
          color="text-orange-500"
        />
        {/* Confirmed Registrations */}
        <StatCard
          title="Paid Registrations"
          value={adminStats.paidRegistrations}
          icon={<FaCheckCircle />}
          color="text-teal-600"
        />
        {/* Pending Registrations */}
        <StatCard
          title="Unpaid Registrations"
          value={adminStats.unpaidRegistrations}
          icon={<FaHourglassHalf />}
          color="text-orange-500"
        />
        {/* Total Users */}
        <StatCard
          title="Total Users"
          value={adminStats.totalUsers}
          icon={<FaDollarSign />}
          color="text-teal-600"
        />
        {/* Total Registrations */}
        <StatCard
          title="Total Registrations"
          value={adminStats.totalRegistrations}
          icon={<FaTimesCircle />}
          color="text-orange-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie Chart - Paid vs Unpaid */}
        <ChartCard title="Paid vs Unpaid Registrations">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Bar Chart - General Stats */}
        <ChartCard title="Overall Statistics">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 flex items-center">
    <div className={`text-2xl mr-3 ${color}`}>{icon}</div>
    <div>
      <h2 className="text-xl font-bold text-gray-700">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
    {children}
  </div>
);

export default AdminAnalytics;
