import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import PopularCamps from "../../Components/PopularCamps/PopularCamps";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      {/* title */}
      <Helmet>
        <title>CampFlow | Home</title>
      </Helmet>

      {/* Banner */}
      <Banner />

      {/* popular camps */}
      <PopularCamps />

      {/* Feedback and Ratings */}
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
