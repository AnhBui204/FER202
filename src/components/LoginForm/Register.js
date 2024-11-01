// Register.js
import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Register = ({
  formValue,
  formError,
  handleChange,
  handleRegisterSubmit,
}) => {
  return (
    <div id="register-form">
      <h1>Register</h1>
      <form onSubmit={handleRegisterSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="UserName"
            placeholder="Username"
            value={formValue.UserName}
            onChange={handleChange}
          />
          <FaUser className="icon" />
          {formError.UserName && (
            <div className="error-feedback">{formError.UserName}</div>
          )}
        </div>
        <div className="input-box">
          <input
            type="password"
            name="PassWord"
            placeholder="Password"
            value={formValue.PassWord}
            onChange={handleChange}
          />
          <FaLock className="icon" />
          {formError.PassWord && (
            <div className="error-feedback">{formError.PassWord}</div>
          )}
        </div>
        <div className="input-box">
          <input
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            value={formValue.ConfirmPassword}
            onChange={handleChange}
          />
          <FaLock className="icon" />
          {formError.ConfirmPassword && (
            <div className="error-feedback">{formError.ConfirmPassword}</div>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
