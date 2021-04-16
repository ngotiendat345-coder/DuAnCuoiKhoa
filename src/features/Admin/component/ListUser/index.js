import React from "react";
import PropTypes from "prop-types";
import Loading from "component/Loading";

function ListUser({ loadingDSUser, dataDSUser }) {
  return (
    <article className="users userStyle">
      <div className="listUser">
        {loadingDSUser && <Loading />}
        {!loadingDSUser && dataDSUser && (
          <React.Fragment>
            {dataDSUser.map((item) => (
              <div className="user" key={item.taiKhoan}>
                <div className="key">
                  {item.hoTen.slice(0, 1).toUpperCase()}
                </div>
                <div>
                  <h4>{item.hoTen}</h4>
                  <p>{item.email}</p>
                </div>
              </div>
            ))}
          </React.Fragment>
        )}
      </div>
    </article>
  );
}

ListUser.propTypes = {
  loadingDSUser: PropTypes.bool.isRequired,
};

export default ListUser;
