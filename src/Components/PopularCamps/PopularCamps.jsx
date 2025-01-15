import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PopularCard from "../../Pages/Home/PopularCard";

const PopularCamps = () => {
  const axiosPublic = useAxiosPublic();

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
    <div className="max-w-7xl mx-auto">
      <SectionTitle heading="Popular Camps"></SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {popular.map((camp, idx) => (
          <PopularCard key={idx} camp={camp}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCamps;
