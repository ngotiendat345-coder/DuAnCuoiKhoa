import React, { useRef } from "react";
import PropTypes from "prop-types";

function UserSearch({ handleOnSubmit, openModal }) {
  const typingTimoutRef = useRef(null);
  const handleOnChangeSearch = (e) => {
    const query = e.currentTarget.value;
    const soTrang = 1;
    if (typingTimoutRef) {
      clearTimeout(typingTimoutRef.current);
    }
    typingTimoutRef.current = setTimeout(() => {
      handleOnSubmit(query, soTrang);
    }, 300);
  };
  return (
    <React.Fragment>
      <div className="user__search">
        <form className="userSearchForm" onSubmit={(e) => e.preventDefault()}>
          <h1>Search Account</h1>
          <input
            type="text"
            className="searchform-input"
            onChange={handleOnChangeSearch}
          />
        </form>
        <div className="userSearchBox">
          <button
            className="addMovieBtn"
            onClick={() => {
              openModal();
            }}
          >
            Add account!
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

UserSearch.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default UserSearch;
