import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
    <div>
      {/* title */}
      <Helmet>
        <title>CampFlow | Home</title>
      </Helmet>

      {/* Banner */}
      <Banner />
    </div>
  );
};

export default Home;
