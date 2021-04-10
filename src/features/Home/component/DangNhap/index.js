import React from "react";
import CustomInputGroup from "../CustomInputGroup";
import PropTypes from "prop-types";
import logo from "assets/logo.png";
import { FormProvider, useForm } from "react-hook-form";

DangNhap.prototype = {
  isDangNhap: PropTypes.bool.isRequired,
  changeDangNhap: PropTypes.func.isRequired,
  handleDangNhap: PropTypes.func.isRequired,
};
function DangNhap({ isDangNhap, changeDangNhap, handleDangNhap }) {
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  return (
    <article className={isDangNhap ? "show dangNhap" : "dangNhap"}>
      <div className="imgContainer">
        <img src={logo} style={{ width: "300px" }} />
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit((data) => {
            const { UserField, PasswordField } = data;
            console.log(data);
            handleDangNhap({ taiKhoan: UserField, matKhau: PasswordField });
            reset();
          })}
        >
          <CustomInputGroup
            label={"Tài khoản"}
            name={"UserField"}
            type="text"
            partern={{
              required: "Tài khoản không được để trống!",
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
          <CustomInputGroup
            label={"Mật khẩu"}
            name={"PasswordField"}
            type="password"
            partern={{
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
          <button type="submit">Đăng nhập</button>
        </form>
      </FormProvider>
      <p style={{ marginTop: "30px" }}>
        Bạn chưa có tài khoản?
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeDangNhap();
            reset();
          }}
        >
          Đăng ký
        </a>
      </p>
    </article>
  );
}

export default React.memo(DangNhap);
