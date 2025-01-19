import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export function Pagination({ totalPages, currentPage, onPageChange }) {
  const getItemProps = (index) => ({
    variant: currentPage === index ? "filled" : "text",
    color: "gray",
    onClick: () => onPageChange(index),
  });

  const next = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const prev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {(() => {
          const pageButtons = [];
          for (let i = 1; i <= totalPages; i++) {
            pageButtons.push(
              <IconButton key={i} {...getItemProps(i)}>
                {i}
              </IconButton>
            );
          }
          return pageButtons;
        })()}
      </div>

      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={currentPage === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
export default Pagination;

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
};
