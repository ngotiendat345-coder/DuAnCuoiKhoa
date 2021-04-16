import React, { useState } from "react";
import PropTypes from "prop-types";
import Loading from "component/Loading";
import Pagination from "../Pagination";
ListMovies.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handlePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  dataListMovie: PropTypes.array.isRequired,
};

function ListMovies({
  dataListMovie,
  handleEdit,
  handlePage,
  handleDelete,
  page,
}) {
  const maxMoviePerPage = 8;
  const handleData = Array.from(
    { length: Math.ceil(dataListMovie.length / 8) },
    (_, index) => {
      const start = index * maxMoviePerPage;
      return dataListMovie.slice(start, start + maxMoviePerPage);
    }
  );
  const [data, setData] = useState(handleData);
  //console.log(data);
  return (
    <section className="adminSection">
      <div className="ListContent adminSection-center">
        <Pagination page={page} handlePage={handlePage} data={data} />
        <div className="listMovie">
          {data[page] &&
            data[page].map((item) => (
              <article className="movie" key={item.maPhim}>
                <img src={item.hinhAnh} />
                <div className="movieOverplay">
                  <h3>{item.tenPhim}</h3>
                  <div className="movieAction">
                    <div>
                      <button
                        className="btnOverplayEdit"
                        onClick={() => {
                          handleEdit(item.maPhim);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <div>
                      <button
                        className="btnOverplayRemove"
                        onClick={() => {
                          handleDelete(item.maPhim, true);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ListMovies;
