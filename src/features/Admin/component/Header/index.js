import React from "react";

function Header() {
  const user = JSON.parse(localStorage.getItem("UserAdmin"));
  const { taiKhoan, hoTen } = user;
  const handleLogout = () => {
    localStorage.removeItem("UserAccount");
    localStorage.removeItem("UserAdmin");
    window.location.reload();
  };
  return (
    <header>
      <div className="cicleIMG">{hoTen.slice(0, 1).toUpperCase()}</div>
      <h4>
        Welcome, <span>{hoTen}</span>
      </h4>
      <button className="btnLogOut" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}

export default Header;
