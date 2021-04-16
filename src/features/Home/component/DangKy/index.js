import React from "react";
import CustomInputGroup from "../CustomInputGroup";
import PropTypes from "prop-types";
import logo from "assets/logo.png";
import { useForm, FormProvider } from "react-hook-form";
DangKy.prototype = {
  isDangNhap: PropTypes.bool.isRequired,
  changeDangNhap: PropTypes.func.isRequired,
  handleDangKy: PropTypes.func.isRequired,
};
function DangKy({ isDangNhap, changeDangNhap, handleDangKy }) {
  const methods = useForm();
  const { handleSubmit, errors, reset, getValues } = methods;
  return (
    <article className={isDangNhap ? "loginModal" : "show loginModal"}>
      <div className="imgContainer">
        <h3>Please Register</h3>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit((data) => {
            const {
              UserInput,
              EmailInput,
              PasswordInput,
              RePasswordInput,
            } = data;
            handleDangKy({
              taiKhoan: UserInput,
              matKhau: PasswordInput,
              email: EmailInput,
              hoTen: UserInput,
            });
            reset();
            // console.log(data)
          })}
        >
          <CustomInputGroup
            label={"Tài khoản"}
            name={"UserInput"}
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
            label={"Email"}
            name={"EmailInput"}
            type="text"
            partern={{
              required: "Email không được để trống!",
              minLength: {
                value: 6,
                message: "Độ dài trên 6 ký tự",
              },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm,
                message: "Sai định dạng email",
              },
            }}
          />
          <CustomInputGroup
            label={"Mật khẩu"}
            name={"PasswordInput"}
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
          <CustomInputGroup
            label={"Nhập lại"}
            name={"RePasswordInput"}
            type="password"
            partern={{
              minLength: {
                value: 6,
                message: "Độ dài trên 6 ký tự",
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/gm,
                message: "Ký tự được chấp nhận A-Z a-z 0-9",
              },
              validate: {
                matchesOldPreviousPassword: (value) => {
                  const { PasswordInput } = getValues();
                  // console.log(matKhau,value)
                  return PasswordInput === value || "Mật khẩu không khớp";
                },
              },
            }}
          />

          <button type="submit">Đăng ký</button>
        </form>
      </FormProvider>
      <p style={{ marginTop: "20px", textAlign: "center" }}>
        Bạn đã có tài khoản?
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeDangNhap();
            reset();
          }}
        >
          Đăng nhập
        </a>
      </p>
    </article>
  );
}

export default React.memo(DangKy);
