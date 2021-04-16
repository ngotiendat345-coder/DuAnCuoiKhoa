import React, { useState } from "react";
import vector from "assets/Vector@2x.png";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
FilmControl.prototype = {
  dataListMovie: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  contentSearch: PropTypes.object.isRequired,
};
function FilmControl({
  handleSearch,
  dataListMovie,
  contentSearch,
  showModal,
}) {
  const soPhanTuTrenTrang = 8;
  const soTrang = 1;
  const [filter, setFilter] = useState(dataListMovie);
  const [query, setQuery] = useState("");
  const [maNhom, setMaNhom] = useState(contentSearch["maNhom"]);
  // const { handleSubmit, reset, register, errors } = methods;
  //console.log(errors);
  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch({
      maNhom: maNhom,
      tenPhim: query,
      soTrang,
      soPhanTuTrenTrang,
    });
    setQuery("");
  };
  return (
    <React.Fragment>
      <div>
        <Link to="/admin/film/add">
          <button className="addMovieBtn">Add movie</button>
        </Link>
        <div className="searchContainer">
          <div className="logo">
            <img src={vector} style={{ height: "2rem", width: "2rem" }} />
            <h1>Cinema management</h1>
          </div>
          <div className="searchChucNang">
            <div>
              <label htmlFor="maNhom">Mã nhóm:</label>
              <input
                type="text"
                id="maNhom"
                onChange={(e) => {
                  const value = e.currentTarget.value;
                  if (/^(GP0[1-9])|(GP10)/i.test(value)) {
                    handleSearch({
                      maNhom: value,
                      tenPhim: query,
                      soTrang,
                      soPhanTuTrenTrang,
                    });
                  }

                  setMaNhom(value);
                }}
                value={maNhom}
                name="maNhom"
                placeholder="GP01"
              />
              {/* {errors && errors["maNhom"] && <p>{errors["maNhom"].message}</p>} */}
            </div>
          </div>
          <div className="searchDivContainer">
            <form className="search" onSubmit={onSubmit}>
              <input
                type="text"
                className="searchText"
                name="tenPhim"
                value={query}
                onChange={(e) => {
                  const newFilter = dataListMovie.filter((item) =>
                    item.tenPhim
                      .toLocaleLowerCase()
                      .includes(e.currentTarget.value.toLocaleLowerCase())
                  );
                  setQuery(e.currentTarget.value);
                  setFilter(newFilter);
                }}
              />
              <div className="dropDiv">
                {filter.map((item) => (
                  <button
                    key={item.maPhim}
                    onClick={(e) => {
                      e.preventDefault();
                      setQuery(item.tenPhim);
                    }}
                  >
                    {item.tenPhim}
                  </button>
                ))}
              </div>
              <button type="submit" className="btnSearch">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FilmControl;
{
  /* <div>
              <label htmlFor="tuNgay">Từ ngày:</label>
              <input
                type="text"
                placeholder="01/01/2000"
                id="tuNgay"
                ref={register({
                  pattern: {
                    value: /\b(0?[1-9]|[12]\d|3[01])[\/](0[1-9]|[12]\d|3[01])[\/](\d{2}|\d{4})\b/g,
                    message: "Sai định dạng ngày",
                  },
                })}
                defaultValue={contentSearch["tuNgay"]}
                name="tuNgay"
              />
              {errors && errors["tuNgay"] && <p>{errors["tuNgay"].message}</p>}
            </div>
            <div>
              <label htmlFor="denNgay">Đến ngày:</label>
              <input
                type="text"
                placeholder="24/12/2021"
                defaultValue=""
                id="denNgay"
                defaultValue={contentSearch["denNgay"]}
                ref={register({
                  pattern: {
                    value: /\b(0?[1-9]|[12]\d|3[01])[\/](0[1-9]|[12]\d|3[01])[\/](\d{2}|\d{4})\b/g,
                    message: "Sai định dạng ngày",
                  },
                })}
                name="denNgay"
              />
              {errors && errors["denNgay"] && (
                <p>{errors["denNgay"].message}</p>
              )}
            </div> */
}
