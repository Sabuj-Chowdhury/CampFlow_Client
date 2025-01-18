import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/shared/SectionTitle/SectionTitle";
import ReactStars from "react-rating-stars-component";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen px-4 py-8 bg-gray-50 rounded-lg shadow-lg">
      {/* page title */}
      <Helmet>
        <title>CampFlow | Add Review</title>
      </Helmet>

      {/* Page Section Title */}
      <SectionTitle heading="Give Your Feedback" />

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 flex flex-col items-center justify-center"
      >
        {/* Rating Section */}
        <div className="text-center">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Rate Your Experience
          </label>
          <ReactStars
            count={5}
            size={40}
            activeColor="#ffd700"
            isHalf={true}
            value={rating}
            onChange={handleRatingChange}
          />
        </div>

        {/* Text Area for Review */}
        <div className="w-full">
          <label
            htmlFor="review"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Give Us Your Feedback
          </label>
          <textarea
            name="review"
            rows="5"
            required
            placeholder="Write your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 text-gray-700 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-md hover:bg-blue-700 transition"
        >
          Submit Review
        </Button>
      </form>
    </div>
  );
};

export default AddReview;
