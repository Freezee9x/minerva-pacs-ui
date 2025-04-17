import React from "react";
import "./App.css";
import logo from "./assets/logo-minerva.png";

function OtpLogin() {
  return (
    <div className="otp-wrapper">
      <div className="otp-container">
        <div className="logo-block">
          <img src={logo} alt="Minerva PACS" className="logo" />
          <h1 className="brand-name">MINERVA PACS</h1>
        </div>

        <div className="otp-box">
          <p className="otp-info">Một mã OTP đã được gửi đến số điện thoại: ********330</p>
          <div className="otp-inputs">
            {Array.from({ length: 6 }).map((_, index) => (
              <input key={index} type="text" maxLength="1" />
            ))}
          </div>
          <button className="btn-submit">Đăng nhập</button>
        </div>

        <div className="support">
          <p>📞 Hỗ trợ kỹ thuật: <strong>0123 456 789</strong></p>
          <div className="languages">
            <span className="disabled">Tiếng Anh</span> | <span className="active">Tiếng Việt</span>
          </div>
        </div>

        <footer>© Copyright 2020, All Rights Reserved</footer>
      </div>
    </div>
  );
}

export default OtpLogin;
