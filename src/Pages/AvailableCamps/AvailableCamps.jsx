import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CampCard from "./CampCard";
import LoadingSpinner from "../../Components/shared/LoadingSpinner/LoadingSpinner";
import SectionTitle from "../../Components/shared/SectionTitle/SectionTitle";
import { FaThLarge, FaTh } from "react-icons/fa";
import { useState } from "react";
import LazyLoad from "react-lazyload";
import Pagination from "../../Components/paginationUI/Pagination";
import { Button } from "@material-tailwind/react";

const AvailableCamps = () => {
  const axiosPublic = useAxiosPublic();
  const [filter, setFilter] = useState("");
  const [layout, setLayout] = useState("3col");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data: campsData = { camps: [], total: 0 }, isLoading } = useQuery({
    queryKey: ["campsData", filter, search, currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/available-camps?sort=${filter}&search=${search}&page=${currentPage}&limit=${itemsPerPage}`
      );
      return data;
    },
  });

  const handleReset = () => {
    setFilter("");
    setSearch("");
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const totalPages = Math.ceil(campsData.total / itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>CampFlow | Available Camps</title>
      </Helmet>
      <div className="container mx-auto px-4 py-4">
        <SectionTitle heading="available camps" />
        <p className="text-gray-600 text-center text-lg sm:text-xl mb-6">
          Discover the best healthcare camps tailored for your needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border outline-none border-gray-300 text-gray-700 rounded-lg px-4 py-2 md:w-2/12 w-full sm:w-auto"
          >
            <option value="">Select</option>
            {/* <option value="count">Most Registered</option> */}
            <option value="des">Camp Fees (High to Low)</option>
            <option value="asc">Camp Fees (Low to High)</option>
            {/* <option value="alphabetical">Alphabetical Order (Camp Name)</option> */}
          </select>

          <div className="flex items-center gap-2 w-full md:w-7/12 sm:w-auto">
            <input
              onBlur={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search camps..."
              className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
            />
            <button className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition">
              Search
            </button>
            <Button onClick={handleReset}>Reset</Button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLayout("3col")}
              className={`p-2 rounded-lg border ${
                layout === "3col"
                  ? "bg-green-300 text-white shadow-lg"
                  : "bg-gray-200 text-black hover:bg-red-300"
              }`}
            >
              <FaTh size={20} />
            </button>
            <button
              onClick={() => setLayout("2col")}
              className={`p-2 rounded-lg border ${
                layout === "2col"
                  ? "bg-green-300 text-white shadow-lg"
                  : "bg-gray-200 text-black hover:bg-red-300"
              }`}
            >
              <FaThLarge size={20} />
            </button>
          </div>
        </div>

        <div>
          {campsData.camps.length > 0 ? (
            <div
              className={`grid grid-cols-1 gap-6 ${
                layout === "3col"
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-2"
              }`}
            >
              {campsData.camps.map((camp) => (
                <LazyLoad key={camp._id} height={300} once>
                  <CampCard camp={camp} />
                </LazyLoad>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-8">
              <p>No camps found matching your search criteria.</p>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AvailableCamps;
