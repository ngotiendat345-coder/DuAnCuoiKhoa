import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

NavLink.prototype = {
  page: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};
function NavLink({ page, links }) {
  return (
    <React.Fragment>
      <li className="nav-link">
        <button>{page}</button>
        <div className="dropLink">
          {links.map((item) => {
            const { url, label, icon } = item;
            if (item.page === page) {
              return (
                <Link className="link" to={url} key={label}>
                  {icon} {label}
                </Link>
              );
            }
          })}
          <div className="caret"></div>
        </div>
      </li>
    </React.Fragment>
  );
}

export default NavLink;
