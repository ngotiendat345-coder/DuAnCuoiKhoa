import React from "react";
import PropTypes from "prop-types";

function SearchButton({ totalPages, page, handleOnSubmit, loadingListUser }) {
  return (
    <div className="searchBtnContainer">
      <button
        onClick={() => {
          handleOnSubmit("prev");
        }}
        disabled={loadingListUser}
      >
        prev
      </button>
      <p>
        {page} of {totalPages}
      </p>
      <button
        onClick={() => {
          handleOnSubmit("next");
        }}
        disabled={loadingListUser}
      >
        next
      </button>
    </div>
  );
}

SearchButton.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default SearchButton;
