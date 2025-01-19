import PropTypes from "prop-types";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const RegistrationPieChart = ({ statusData, COLORS }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border flex flex-col items-center justify-center border-gray-200">
      <h2 className="text-lg font-bold text-teal-700 text-center mb-4">
        Registration Status
      </h2>
      <PieChart width={300} height={300}>
        <Pie
          data={statusData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#14b8a6"
          label
        >
          {statusData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default RegistrationPieChart;

RegistrationPieChart.propTypes = {
  statusData: PropTypes.array,
  COLORS: PropTypes.array,
};
