import React, { useState } from "react";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";
import { AnimatePresence } from "framer-motion";

MovieList.prototype = {
  danhSach: PropTypes.array.isRequired,
  handleOnEror: PropTypes.func.isRequired,
};
function MovieList({ danhSach, handleOnEror }) {
  const [pages, setPages] = useState(1);

  const handleIncreasePage = () => {
    setPages((pages) => {
      return pages + 1;
    });
  };
  const handleHidden = () => {
    return Math.ceil(danhSach.length / 8) === pages ? true : false;
  };
  return (
    <React.Fragment>
      <AnimatePresence>
        {danhSach.slice(0, pages * 8).map((item) => (
          <MovieCard {...item} key={item.maPhim} handleOnEror={handleOnEror} />
        ))}
        <button
          className="btn btnLoading"
          onClick={handleIncreasePage}
          hidden={handleHidden()}
        >
          Loading more
        </button>
      </AnimatePresence>
    </React.Fragment>
  );
}

export default MovieList;
