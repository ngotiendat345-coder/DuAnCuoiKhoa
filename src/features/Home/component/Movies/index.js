import Loading from "component/Loading";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
function Movies() {
  const { danhSachPhim, loading } = useSelector((state) => state.FilmReducer);
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="GridCinemaWrapper">
      <div className="TitleWrapper">
        <h2>
          <span>/</span>
          lastest movies
        </h2>
      </div>
      <div className="GridCinemaWrapper__content">
        {danhSachPhim && (
          <React.Fragment>
            {danhSachPhim.slice(0, 4).map((item, index) => (
              <article
                key={item.maPhim}
                className={`GridCinemaWrapper__content--imgWrap div-${index}`}
              >
                <img src={item.hinhAnh} />
                <div className="info">
                  <p>- ACTION -</p>
                  <h3>{item.tenPhim}</h3>
                  <Link to={`/phim/${item.maPhim}`}>Chi tiết</Link>
                </div>
              </article>
            ))}
          </React.Fragment>
        )}
      </div>
      <Link className="btn btnGridCinema" to="/movies">
        All Movies
      </Link>
    </section>
  );
}

export default Movies;
