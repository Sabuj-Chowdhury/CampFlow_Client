import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PopularCard = ({ camp }) => {
  const {
    campName,
    imageURL,
    price,
    date,
    time,
    location,
    professionalName,
    count,
    _id,
  } = camp;

  return (
    <Link to={`/camp-details/${_id}`}>
      <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        {/* Image Section */}
        <div className="w-full h-96">
          <img
            src={imageURL}
            alt={campName}
            className="w-full h-full object-cover "
          />
        </div>

        {/* Details Section */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">{campName}</h2>
          <p className="text-gray-600 mb-1">
            <strong>Camp Fees:</strong> ${price}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Date & Time:</strong> {date} | {time}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Location:</strong> {location}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Healthcare Professional:</strong> {professionalName}
          </p>
          <p className="text-gray-600 mb-3">
            <strong>Participants:</strong> {count}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PopularCard;

PopularCard.propTypes = {
  camp: PropTypes.object,
};
