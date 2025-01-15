import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CampCard from "./CampCard";
import LoadingSpinner from "../../Components/shared/LoadingSpinner/LoadingSpinner";

const AvailableCamps = () => {
  const axiosPublic = useAxiosPublic();

  const { data: campsData = [], isLoading } = useQuery({
    queryKey: ["campsData"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/camps");
      return data;
    },
  });

  // console.log(campsData);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Title */}
      <Helmet>
        <title>CampFlow | Available Camps</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campsData.map((camp) => (
            <CampCard key={camp._id} camp={camp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCamps;
