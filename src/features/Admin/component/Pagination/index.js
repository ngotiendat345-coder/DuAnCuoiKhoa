import React from "react";
import PropTypes from "prop-types";

function Pagination({ data, page, handlePage }) {
  return (
    <div className="pagination">
      <button
        className="btnPaginatePrev btnPaginate"
        onClick={() => {
          handlePage(page - 1);
        }}
      >
        Prev
      </button>
      {data.map((_, index) => (
        <button
          onClick={() => {
            handlePage(index);
          }}
          key={index}
          className={index === page ? "btnPaginate active" : "btnPaginate"}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="btnPaginateNext btnPaginate"
        onClick={() => {
          handlePage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  handlePage: PropTypes.func.isRequired,
};

export default Pagination;
