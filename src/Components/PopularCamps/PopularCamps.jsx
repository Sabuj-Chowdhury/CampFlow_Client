import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PopularCard from "../../Pages/Home/PopularCard";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

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

  //   console.log(popular);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="max-w-7xl mx-auto my-10">
      <SectionTitle heading="Popular Camps"></SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {popular.map((camp, idx) => (
          <PopularCard key={idx} camp={camp}></PopularCard>
        ))}
      </div>
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
  );
};

export default PopularCamps;
