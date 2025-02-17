import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import PopularCamps from "../../Components/PopularCamps/PopularCamps";
import Reviews from "./Reviews";
import Services from "../../Components/Services/Services";
import Team from "../../Components/Team/Team";
import Impact from "../../Components/Impact/Impact";
import HealthTips from "../../Components/HealthTips/HealthTips";
import Partners from "../../Components/Partners/Partners";

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

      {/* Services */}
      <Services />

      {/* Team */}
      <Team />

      {/* Health Tips */}
      <HealthTips />

      {/* Impact */}
      <Impact />

      {/* Feedback and Ratings */}
      <Reviews></Reviews>

      {/* Partners */}
      <Partners />
    </div>
  );
};

export default Home;
