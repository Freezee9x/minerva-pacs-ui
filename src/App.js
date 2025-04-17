import React from "react";
import "./App.css";
import logo from "./assets/logo-minerva.png";

function OtpLogin() {
  return (
    <div className="otp-wrapper">
      <div className="otp-box">
        <img src={logo} alt="Minerva PACS Logo" className="otp-logo" />
        <h2 className="otp-title">MINERVA PACS</h2>

        <p className="otp-message">Một mã OTP đã được gửi đến số điện thoại: <strong>********330</strong></p>

        <div className="otp-inputs">
          {Array.from({ length: 6 }).map((_, idx) => (
            <input key={idx} type="text" maxLength="1" />
          ))}
        </div>

        <button className="otp-button">Đăng nhập</button>

        <div className="otp-support">
          📞 Hỗ trợ kỹ thuật: <strong>0123 456 789</strong>
        </div>

        <div className="otp-languages">
          <span className="disabled">Tiếng Anh</span> | <span className="active">Tiếng Việt</span>
        </div>
      </div>

      <footer className="otp-footer">© Copyright 2020, All Rights Reserved</footer>
    </div>
  );
}

export default OtpLogin;
