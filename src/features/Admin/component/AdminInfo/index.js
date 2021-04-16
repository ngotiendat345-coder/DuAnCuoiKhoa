import React from "react";
import PropTypes from "prop-types";
import adminImg from "assets/admin.jpg";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

AdminInfo.propTypes = {
  user: PropTypes.object.isRequired,
};
function AdminInfo({ user }) {
  return (
    <article className="administrator userStyle">
      <div className="header">
        <img src={adminImg} />
        <div>
          <h4>{user.hoTen}</h4>
          <p>{user.taiKhoan}</p>
        </div>
        <a href="https://www.facebook.com/profile.php?id=100025980606407">
          <button className="btnFollow">Facebook</button>
        </a>
      </div>
      <p className="bio">Administrator of Cinema</p>
      <div className="links">
        <p>
          <button>
            <AiOutlineMail />
          </button>
          {user.email}
        </p>
        <p>
          <button>
            <AiOutlinePhone />
          </button>
          {user.soDT}
        </p>
      </div>
    </article>
  );
}

export default AdminInfo;
