import PropTypes from "prop-types";

const SectionTitle = ({ heading }) => {
  return (
    <div className="lg:w-5/12 w-1/2 mx-auto text-center mt-5 mb-5">
      <h2 className="uppercase  border-y-2 text-teal-500 text-3xl md:text-4xl py-4">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  heading: PropTypes.string,
};
