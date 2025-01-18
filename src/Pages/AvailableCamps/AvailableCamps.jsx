import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CampCard from "./CampCard";
import LoadingSpinner from "../../Components/shared/LoadingSpinner/LoadingSpinner";
import SectionTitle from "../../Components/shared/SectionTitle/SectionTitle";
import { FaThLarge, FaTh } from "react-icons/fa";
import { useState } from "react";

const AvailableCamps = () => {
  const axiosPublic = useAxiosPublic();
  const [filter, setFilter] = useState("");
  const [layout, setLayout] = useState("3col");
  // console.log(filter);

  const { data: campsData = [], isLoading } = useQuery({
    queryKey: ["campsData"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/available-camps");
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Title */}
      <Helmet>
        <title>CampFlow | Available Camps</title>
      </Helmet>
      <div className="container mx-auto px-4 py-4">
        <SectionTitle heading="available camps" />
        <p className="text-gray-600 text-center text-lg sm:text-xl mb-6">
          Discover the best healthcare camps tailored for your needs.
        </p>
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Sorting Options */}
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border outline-none border-gray-300 text-gray-700 rounded-lg px-4 py-2 md:w-2/12 w-full sm:w-auto"
          >
            <option value="">Select</option>
            <option value="count">Most Registered</option>
            <option value="camp-fees">Camp Fees</option>
            <option value="alphabetical">Alphabetical Order (Camp Name)</option>
          </select>

          {/* Search Bar */}
          <div className="flex items-center w-full md:w-7/12 sm:w-auto">
            <input
              type="text"
              placeholder="Search camps..."
              className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
            />
            <button className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition">
              Search
            </button>
          </div>

          {/* Layout Toggle Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLayout("3col")}
              className={`p-2 rounded-lg border border-gray-300  ${
                layout === "3col"
                  ? "bg-green-300 text-white shadow-lg"
                  : "bg-gray-200 text-black hover:bg-red-300"
              }`}
            >
              <FaTh size={20} />
            </button>
            <button
              onClick={() => setLayout("2col")}
              className={`p-2 rounded-lg border border-gray-300 
            ${
              layout === "2col"
                ? "bg-green-300 text-white shadow-lg"
                : "bg-gray-200 text-black hover:bg-red-300"
            }
             
            `}
            >
              <FaThLarge size={20} />
            </button>
          </div>
        </div>

        {/* Camps Grid */}
        <div
          className={`grid grid-cols-1 gap-6
          
          ${
            layout === "3col"
              ? " md:grid-cols-2 lg:grid-cols-3 "
              : "grid-cols-2"
          }
          
          `}
        >
          {campsData.map((camp) => (
            <CampCard key={camp._id} camp={camp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCamps;
