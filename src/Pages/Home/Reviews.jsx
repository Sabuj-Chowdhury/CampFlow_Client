import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/shared/SectionTitle/SectionTitle";
import LoadingSpinner from "../../Components/shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ReactStars from "react-rating-stars-component";
import Marquee from "react-fast-marquee";

const Reviews = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/reviews");
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      {/* Section Title */}
      <SectionTitle heading="Feedback and Ratings" />

      {/* Subheading */}
      <p className="text-center text-gray-600 mb-8">
        Here's what our community has to say about their experiences. We value
        your feedback and continuously strive to improve.
      </p>

      {/* Marquee Section with Review Cards */}
      <div className="py-6 ">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 mx-4 flex flex-col w-72 space-y-4"
            >
              {/* Rating Display */}
              <div className="flex items-center space-x-2">
                <ReactStars
                  count={5}
                  size={24}
                  value={review.rating}
                  edit={false}
                  activeColor="#ffd700"
                />
                <span className="text-gray-600 text-sm">
                  ({review.rating}/5)
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-800 text-sm line-clamp-3">
                {review.reviewText}
              </p>

              {/* Attribution */}
              <span className="text-sm text-gray-500">- Anonymous User</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
