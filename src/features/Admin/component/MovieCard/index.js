import React from "react";
import PropTypes from "prop-types";

function MovieCard({ item, handleEdit, handleDelete }) {
  const { hinhAnh, tenPhim, maPhim } = item;
  return (
    <article className="movie">
      <img src={hinhAnh} />
      <div className="movieOverplay">
        <h3>{tenPhim}</h3>
        <div className="movieAction">
          <div>
            <button
              className="btnOverplayEdit"
              onClick={() => {
                handleEdit(maPhim);
              }}
            >
              Edit
            </button>
          </div>
          <div>
            <button
              className="btnOverplayRemove"
              onClick={() => {
                handleDelete(maPhim);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default MovieCard;
