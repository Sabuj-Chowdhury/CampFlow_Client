import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CampCard from "./CampCard";

const AvailableCamps = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: campsData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["campsData"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/camps");
      return data;
    },
  });

  console.log(campsData);

  return (
    <div>
      {/* Title */}
      <Helmet>
        <title>CampFlow | Available Camps</title>
      </Helmet>
      <div>
        {campsData.map((camp, idx) => (
          <CampCard key={idx} camp={camp}></CampCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableCamps;
