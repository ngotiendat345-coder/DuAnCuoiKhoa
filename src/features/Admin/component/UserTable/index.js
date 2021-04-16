import React from "react";
import PropTypes from "prop-types";
import { FaCaretDown, FaCaretUp, FaTools } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
function UserTable({ data, openModal, handleDeleteUser }) {
  return (
    <React.Fragment>
      <div className="listForm">
        <div className="listForm__header">
          <h3>account form</h3>
          <button className="userIcon">
            <FaCaretDown />
          </button>
        </div>
        <div>
          {data.length < 1 && <h3>Nothing matches your seacher</h3>}

          {data.length >= 1 && (
            <React.Fragment>
              <table className="listForm__table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tài khoản</th>
                    <th>Họ tên</th>
                    <th>Mật khẩu</th>
                    <th>Email</th>
                    <th>SDT</th>
                    <th>Loại account</th>
                    <th>CN</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.taiKhoan}>
                      <td style={{ textAlign: "center" }}>{index + 1}</td>
                      <td>{item.taiKhoan}</td>
                      <td>{item.hoTen}</td>
                      <td>{item.matKhau}</td>
                      <td>{item.email}</td>
                      <td>{item.soDt}</td>
                      <td>{item.maLoaiNguoiDung}</td>
                      <td>
                        <button
                          className="iconUpdate userIcon"
                          onClick={() => {
                            openModal(item.taiKhoan);
                          }}
                        >
                          <FaTools color="#28a745" />
                        </button>
                        <button
                          className="iconDelte userIcon"
                          onClick={() => {
                            handleDeleteUser(item.taiKhoan);
                          }}
                        >
                          <AiFillDelete color="#ba5d2c" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

UserTable.propTypes = {
  data: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};

export default UserTable;
