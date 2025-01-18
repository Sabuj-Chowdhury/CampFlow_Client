import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CampCard = ({ camp }) => {
  const {
    _id,
    campName,
    location,
    professionalName,
    description,
    imageURL,
    date,
    time,
    price,
    count,
  } = camp || {};

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full w-full max-w-screen-md mx-auto">
      {/* Image Section */}
      <div className="w-full h-96">
        <img
          src={imageURL}
          alt={campName}
          className={`h-full w-full object-cover `}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Camp Name */}
        <h2 className="text-lg font-semibold text-teal-700 mb-2 truncate">
          {campName}
        </h2>

        {/* Date and Time and Price */}
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Date:</span> {date}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-medium">Time:</span> {time}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-medium">Price:</span> {price}
        </p>

        {/* Location */}
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-medium">Location:</span> {location}
        </p>

        {/* Healthcare Professional */}
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-medium">Healthcare Professional:</span>{" "}
          {professionalName}
        </p>

        {/* Participant Count */}
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-medium">Participants:</span> {count}
        </p>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Details Button */}
        <div className="mt-auto">
          <Link to={`/camp-details/${_id}`}>
            <Button className="bg-teal-600 text-white py-4  w-full rounded-md ">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampCard;

CampCard.propTypes = {
  camp: PropTypes.object,
};
