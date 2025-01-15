const CampCard = ({ camp }) => {
  const {
    campName,
    location,
    professionalName,
    description,
    imageURL,
    date,
    time,
    count,
  } = camp || {};

  console.log(camp);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/3">
        <img
          src={imageURL}
          alt={campName}
          className="h-56 md:h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Camp Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{campName}</h2>

        {/* Date and Time */}
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Date:</span> {date} |{" "}
          <span className="font-semibold">Time:</span> {time}
        </p>

        {/* Location */}
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Location:</span> {location}
        </p>

        {/* Healthcare Professional */}
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Healthcare Professional:</span>{" "}
          {professionalName}
        </p>

        {/* Participant Count */}
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Participants:</span> {count}
        </p>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Description:</span> {description}
        </p>

        {/* Details Button */}
        <div className="mt-auto">
          <button className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampCard;
