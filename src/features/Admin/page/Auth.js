import { AppContext } from "context/context";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { dangNhapActionCreator } from "redux/action/UserAction";
import "./auth.scss";

function Auth() {
  const [text, setText] = useState(0);
  const history = useHistory();
  const { showModal } = useContext(AppContext);
  const dispatch = useDispatch();
  const handleDangNhap = (user) => {
    dispatch(dangNhapActionCreator(user, history, "/admin", showModal));
  };
  const methods = useForm();
  const { handleSubmit, reset, register } = methods;
  const onSubmit = (data) => {
    handleDangNhap(data);
    // console.log(data);
  };
  return (
    <React.Fragment>
      <section className="auth">
        <div
          className="background"
          style={{ filter: `blur(${20 - text}px)` }}
        />
        <div className="adminform">
          <h1>Administration login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label htmlFor="taiKhoan">Account:</label>
              <input
                type="text"
                id="taiKhoan"
                name="taiKhoan"
                placeholder="Enter your account"
                ref={register({
                  required: "Tài khoản không được để trống!",
                  pattern: {
                    value: /^[A-Za-z0-9]+$/gm,
                    message: "Ký tự được chấp nhận A-Z a-z 0-9",
                  },
                })}
              />
            </div>
            <div className="form-control">
              <label htmlFor="matKhau">Password:</label>
              <input
                type="text"
                id="matKhau"
                name="matKhau"
                placeholder="Enter your password"
                ref={register({
                  required: "Mật khẩu không được để trống!",
                  pattern: {
                    value: /^[A-Za-z0-9]+$/gm,
                    message: "Ký tự được chấp nhận A-Z a-z 0-9",
                  },
                })}
                onChange={(e) => {
                  const value = e.currentTarget.value;
                  const length = value.length;
                  setText(length);
                }}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Auth;
