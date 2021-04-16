import React from "react";
import PropTypes from "prop-types";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useForm, FormProvider } from "react-hook-form";
import UserFormGroup from "../UserFormGroup";
import Loading from "component/Loading";

UserModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  userModal: PropTypes.bool.isRequired,
  dataThongTinUser: PropTypes.object,
  loadingThongTinUser: PropTypes.bool,
  isAdding: PropTypes.bool.isRequired,
  handleAddEditUser: PropTypes.func.isRequired,
};
function UserModal({
  closeModal,
  userModal,
  dataThongTinUser,
  isAdding,
  loadingThongTinUser,
  handleAddEditUser,
}) {
  const methods = useForm();
  const defaultValue = isAdding
    ? {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDT: "",
        maNhom: "",
        maLoaiNguoiDung: "",
        hoTen: "",
      }
    : {
        taiKhoan: dataThongTinUser?.taiKhoan,
        matKhau: dataThongTinUser?.matKhau,
        email: dataThongTinUser?.email,
        soDT: dataThongTinUser?.soDT,
        maNhom: dataThongTinUser?.maNhom,
        maLoaiNguoiDung: dataThongTinUser?.maLoaiNguoiDung,
        hoTen: dataThongTinUser?.hoTen,
      };

  const { reset, handleSubmit } = methods;
  const onSubmit = (data) => {
    handleAddEditUser(data);
    console.log(data);
  };
  const handleTaiKhoanAddEdit = () => {
    if (isAdding) {
      return {
        required: "Tài khoản không được để trống!",
        minLength: {
          value: 6,
          message: "Độ dài trên 6 ký tự",
        },
        pattern: {
          value: /^[A-Za-z0-9]+$/gm,
          message: "Ký tự được chấp nhận A-Z a-z 0-9",
        },
      };
    }
    return {
      required: "Tài khoản không được để trống!",
      validate: (value) => {
        return (
          value === dataThongTinUser.taiKhoan || "Không được thay đổi tài khoản"
        );
      },
    };
  };
  return (
    <div
      onClick={(e) => {
        const target = e.target;
        //console.log(target.classList);
        if (target.classList.contains("user__modal")) {
          closeModal();
        }
      }}
    >
      {userModal && (
        <div className="user__modal">
          <div className="user__form">
            <div className="user__form--header">
              {isAdding ? <h3>Adding user</h3> : <h3>Editing user</h3>}
              <button className="userIcon">
                <FaCaretDown />
              </button>
            </div>
            <div className="user__form--content">
              <div className="user__form--container">
                {!isAdding && loadingThongTinUser && <Loading />}
                {(isAdding || !loadingThongTinUser) && (
                  <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <UserFormGroup
                        name="taiKhoan"
                        label="Tài khoản:"
                        type="text"
                        defaultValue={defaultValue["taiKhoan"]}
                        pattern={handleTaiKhoanAddEdit()}
                      />
                      <UserFormGroup
                        name="email"
                        label="Email:"
                        type="text"
                        defaultValue={defaultValue["email"]}
                        pattern={{
                          required: "Email không được để trống!",
                          minLength: {
                            value: 6,
                            message: "Độ dài trên 6 ký tự",
                          },
                          pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                            message: "Sai định dạng email",
                          },
                        }}
                      />
                      <UserFormGroup
                        name="soDT"
                        label="Số điện thoại:"
                        type="text"
                        defaultValue={defaultValue["soDT"]}
                        pattern={{
                          required: "Số ĐT không được để trống!",
                          minLength: {
                            value: 6,
                            message: "Độ dài trên 6 ký tự",
                          },
                          pattern: {
                            value: /(09|01[2689])+([0-9]{8})\b/i,
                            message: "Sai định dạng sdt",
                          },
                        }}
                      />
                      <UserFormGroup
                        name="maNhom"
                        label="Mã nhóm:"
                        type="text"
                        defaultValue={defaultValue["maNhom"]}
                        pattern={{
                          required: "Số ĐT không được để trống!",
                          pattern: {
                            value: /^(GP0[1-9])|(GP10)/i,
                            message: "Sai định dạng sdt",
                          },
                        }}
                      />
                      <UserFormGroup
                        name="matKhau"
                        label="Mật khẩu:"
                        type="password"
                        defaultValue={defaultValue["matKhau"]}
                        pattern={{
                          required: "Mật khẩu không được để trống!",
                          minLength: {
                            value: 6,
                            message: "Độ dài trên 6 ký tự",
                          },
                          pattern: {
                            value: /^[A-Za-z0-9]+$/gm,
                            message: "Ký tự được chấp nhận A-Z a-z 0-9",
                          },
                        }}
                      />
                      <UserFormGroup
                        name="maLoaiNguoiDung"
                        label="Mã loại người dùng:"
                        type="select"
                        defaultValue={defaultValue["maNhom"]}
                        pattern={{
                          required: "Mã nhóm không được để trống!",
                          validate: {
                            isValid: (value) => {
                              return (
                                value === "KhachHang" ||
                                value === "QuanTri" ||
                                "Sai định dạng"
                              );
                            },
                          },
                        }}
                      />

                      <UserFormGroup
                        name="hoTen"
                        label="Họ tên:"
                        type="text"
                        defaultValue={defaultValue["hoTen"]}
                        pattern={{
                          required: "Họ tên không được để trống!",
                          minLength: {
                            value: 6,
                            message: "Độ dài trên 6 ký tự",
                          },
                        }}
                      />
                      <div className="hrDiv" />
                      <div className="userBtnContainer">
                        <button
                          className="resetBtn"
                          hidden={!isAdding}
                          onClick={() => {
                            reset();
                          }}
                        >
                          Reset
                        </button>
                        <button
                          className="addBtn"
                          type="submit"
                          hidden={!isAdding}
                        >
                          Add
                        </button>
                        <button
                          className="updateBtn"
                          type="submit"
                          hidden={isAdding}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </FormProvider>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserModal;
/* <div className="userFormGroup">
                      <label htmlFor="maLoaiNguoiDung">
                        Mã loại người dùng:
                      </label>
                      <select name="maLoaiNguoiDung" id="maLoaiNguoiDung">
                        <option value>Chọn loại người dùng</option>
                        <option value="KhachHang">Khách hàng</option>
                        <option value="QuanTri">Quản trị</option>
                      </select>
                    </div> */
