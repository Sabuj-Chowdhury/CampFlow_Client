import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="text-center">
      {/* title */}
      <Helmet>
        <title>CampFlow | Home</title>
      </Helmet>
      <p>Home</p>
    </div>
  );
};

export default Home;
