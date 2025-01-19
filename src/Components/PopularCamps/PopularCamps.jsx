import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PopularCard from "../../Pages/Home/PopularCard";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";

const PopularCamps = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { data: popular = [], isLoading } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/camps/popular");
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <SectionTitle heading="Popular Medical Camps" />

      <p className="text-center text-gray-600 text-lg mb-8">
        Explore the medical camps that have made a significant impact in local
        communities. These camps provide free healthcare services,
        consultations, and support for those in need. Discover how you can
        benefit or contribute to these impactful events.
      </p>

      {/* Popular Camps Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {popular.map((camp, idx) => (
          <LazyLoad key={idx} height={300} once>
            <PopularCard camp={camp} />
          </LazyLoad>
        ))}
      </div>

      <div className="text-center my-8">
        <h3 className="text-xl font-medium text-gray-700 mb-3">
          Looking for more medical camps near you?
        </h3>
        <p className="text-gray-600 mb-6">
          Our network of medical camps spans across multiple regions, offering
          free checkups, specialized treatments, and health awareness programs.
          Explore the full list to find one that suits your needs.
        </p>

        <div className="text-center my-4">
          {/* "See All Camps" Button */}
          <Button
            onClick={() => navigate("available-camps")}
            className=" bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            See All Camps
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularCamps;
