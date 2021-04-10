import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch, FaTimes } from "react-icons/fa";
import MovieList from "../MovieList";

SearchSection.prototype = {
  danhSach: PropTypes.array.isRequired,
  handleOnEror: PropTypes.func.isRequired,
};

function SearchSection({ danhSach, handleOnEror }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(danhSach);
  const handleClear = () => {
    setSearch("");
    setFilter(danhSach);
  };
  const handleOnChange = (e) => {
    let value = e.currentTarget.value;
    // if (value === "") {
    //   setFilter([...danhSach]);
    //   setSearch(value);
    //   return;
    // }
    const newFilter = danhSach.filter((item) => {
      if (
        item.tenPhim.toUpperCase().includes(value) ||
        item.tenPhim.toLowerCase().includes(value)
      ) {
        return item;
      }
    });
    setSearch(value);
    setFilter([...newFilter]);
  };
  return (
    <React.Fragment>
      <div className="SearchBox">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder="Search here..."
            onChange={(e) => {
              handleOnChange(e);
            }}
            value={search}
          />
          <button type="submit" className="SearchBox__submit">
            <FaSearch />
          </button>
          <button
            className="SearchBox__close"
            hidden={!search}
            onClick={handleClear}
          >
            <FaTimes />
          </button>
        </form>
      </div>
      <div className="section-center danhSachMovies">
        <MovieList danhSach={filter} handleOnEror={handleOnEror} />
      </div>
    </React.Fragment>
  );
}

export default SearchSection;
