import React, { useState } from "react";
import "./auth.scss";

function Auth() {
  const [text, setText] = useState(0);
  return (
    <React.Fragment>
      <section className="auth">
        <div
          className="background"
          style={{ filter: `blur(${20 - text}px)` }}
        />
        <div className="adminform">
          <h1>Administration login</h1>
          <div className="form-control">
            <label htmlFor="taiKhoan">Account:</label>
            <input type="text" id="taiKhoan" placeholder="Enter your account" />
          </div>
          <div className="form-control">
            <label htmlFor="matKhau">Password:</label>
            <input
              type="text"
              id="matKhau"
              placeholder="Enter your password"
              onChange={(e) => {
                const value = e.currentTarget.value;
                const length = value.length;
                setText(length);
              }}
            />
          </div>
          <button>Submit</button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Auth;
