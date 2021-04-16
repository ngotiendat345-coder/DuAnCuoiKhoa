import React from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserSecret,
  FaTv,
  FaUserFriends,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
Sidebar.prototype = {
  openNav: PropTypes.bool.isRequired,
  setOpenNav: PropTypes.func.isRequired,
};
function Sidebar({ openNav, setOpenNav }) {
  return (
    <React.Fragment>
      <div className="circle-container">
        <div className="circle">
          <button
            className="btnClose"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            <FaTimes />
          </button>
          <button
            className="btnOpen"
            onClick={() => {
              setOpenNav(true);
            }}
          >
            <FaBars />
          </button>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/admin">
              <FaUserSecret /> Administrator{" "}
            </Link>
          </li>
          <li>
            <Link to="/admin/user">
              <FaUserFriends /> Users
            </Link>
          </li>
          <li>
            <Link to="/admin/film">
              <FaTv /> Movies
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Sidebar;
