import PropTypes from "prop-types";
import { Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";

const ConfirmationBarChart = ({ paymentData }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-bold text-teal-700 text-center mb-4">
        Payment Status
      </h2>
      <BarChart width={400} height={300} data={paymentData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#fdba74" />
      </BarChart>
    </div>
  );
};

export default ConfirmationBarChart;

ConfirmationBarChart.propTypes = {
  paymentData: PropTypes.array,
};
