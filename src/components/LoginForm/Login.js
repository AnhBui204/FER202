// Login.js
import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = ({ formValue, formError, handleChange, handleLoginSubmit }) => {
  return (
    <form onSubmit={handleLoginSubmit}>
      <h1>Login</h1>
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
      <div className="remember-forgot">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
