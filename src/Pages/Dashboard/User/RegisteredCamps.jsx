import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/shared/SectionTitle/SectionTitle";

const RegisteredCamps = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* title */}
      <Helmet>
        <title>CampFlow | Registered</title>
      </Helmet>
      <SectionTitle heading="Registered Camps"></SectionTitle>
    </div>
  );
};

export default RegisteredCamps;
