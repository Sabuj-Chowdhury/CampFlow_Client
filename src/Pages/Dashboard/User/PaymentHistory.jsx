import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* title */}
      <Helmet>
        <title>CampFlow | Payments History</title>
      </Helmet>
      <SectionTitle heading="Payment history"></SectionTitle>
    </div>
  );
};

export default PaymentHistory;
