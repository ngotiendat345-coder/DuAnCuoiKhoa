import React, { useContext } from "react";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import { AppContext } from "context/context";
import NavLink from "component/NavLink";
import { BiUserCircle } from "react-icons/bi";

function Header({ backgroundColor }) {
  const { showSidebar, links } = useContext(AppContext);
  const isUser = localStorage.getItem("UserAccount");
  //console.log(isUser.taiKhoan);
  const user = isUser ? JSON.parse(isUser) : null;
  console.log(user);
  const pages = links.reduce((total, item, index, self) => {
    if (index === self.findIndex((value) => value.page === item.page)) {
      return [...total, item.page];
    }
    return total;
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("UserAccount");
    localStorage.removeItem("UserAdmin");
    window.location.reload();
  };
  //console.log(pages);
  return (
    <nav className="nav" style={{ backgroundColor }}>
      <div className="nav__center">
        <div className="nav__logo">
          <Link to="/">
            <h3>Cinema</h3>
          </Link>
          <button className="nav__logo-toggle" onClick={showSidebar}>
            <GoThreeBars />
          </button>
        </div>
        <div className="nav__content">
          <ul>
            {pages.map((page) => {
              return <NavLink page={page} links={links} key={page} />;
            })}
          </ul>
          {isUser ? (
            <React.Fragment>
              <div className="userId headerBtn">
                <button>
                  <BiUserCircle className="icon" /> {user.taiKhoan}
                </button>
                <div className="dangxuat">
                  <button onClick={handleLogout}>Đăng xuất</button>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <Link to="/checkin" className="headerBtn">
              <button>
                <BiUserCircle className="icon" /> Đăng nhập
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
