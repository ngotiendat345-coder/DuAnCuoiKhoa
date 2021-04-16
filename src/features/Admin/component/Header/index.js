import React from "react";

function Header() {
  const user = JSON.parse(localStorage.getItem("UserAdmin"));
  const { taiKhoan, hoTen } = user;
  return (
    <header>
      <div className="cicleIMG">{hoTen.slice(0, 1).toUpperCase()}</div>
      <h4>
        Welcome, <span>{hoTen}</span>
      </h4>
      <button className="btnLogOut">Logout</button>
    </header>
  );
}

export default Header;
