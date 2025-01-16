import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";

const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* title */}
      <Helmet>
        <title>CampFlow | Analytics</title>
      </Helmet>
      <SectionTitle heading="analytics"></SectionTitle>
    </div>
  );
};

export default Analytics;
