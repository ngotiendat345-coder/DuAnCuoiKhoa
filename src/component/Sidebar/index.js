import React, { useContext } from "react";
import { AppContext } from "context/context";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
function Sidebar() {
  const { links, closeSidebar } = useContext(AppContext);

  return (
    <aside className="sidebar">
      <div className="container">
        <button onClick={closeSidebar} className="closeBTN">
          <MdClose className="icon" />
        </button>
        <div className="link-container">
          {links.map((item) => {
            const { url, icon, label } = item;
            return (
              <Link to={url} key={label}>
                {icon}
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
