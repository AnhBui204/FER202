// LoginForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import backgroundImage from "../Assets/background.jpg";
import Login from "./Login";
import Register from "./Register";
import useFetchUsers from "./useFetchUsers";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formValue, setFormValue] = useState({
    UserName: "",
    PassWord: "",
    ConfirmPassword: "",
  });
  const [formError, setFormError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const users = useFetchUsers();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const isEmptyValue = (value) => !value || value.trim().length < 1;

  const validateForm = () => {
    const error = {};
    if (isEmptyValue(formValue.UserName)) {
      error.UserName = "UserName is required";
    }
    if (isEmptyValue(formValue.PassWord)) {
      error.PassWord = "PassWord is required";
    }
    if (isRegistering && isEmptyValue(formValue.ConfirmPassword)) {
      error.ConfirmPassword = "Confirm Password is required";
    }
    if (isRegistering && formValue.PassWord !== formValue.ConfirmPassword) {
      error.ConfirmPassword = "Passwords do not match";
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const user = users.find(
        (user) =>
          user.username === formValue.UserName &&
          user.password === formValue.PassWord
      );
      if (user) {
        setIsLoggedIn(true);
        localStorage.setItem("role", user.role);
        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setFormError({
          ...formError,
          UserName: "Invalid username or password",
        });
      }
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const existingUser = users.find(
        (user) => user.username === formValue.UserName
      );

      if (existingUser) {
        setFormError((prevError) => ({
          ...prevError,
          UserName: "Username already exists",
        }));
        return;
      }

      const newUser = {
        id: users.length + 1,
        username: formValue.UserName,
        password: formValue.PassWord,
        role: "user",
      };

      await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      setSuccessMessage("Registration successful! Please log in.");
      setIsRegistering(false);
      navigate("/login", { replace: true });
    }
  };

  return (
    <div
      className="login-body"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="wrapper">
        {successMessage && (
          <div className="success-feedback">{successMessage}</div>
        )}
        {!isRegistering ? (
          <>
            <Login
              formValue={formValue}
              formError={formError}
              handleChange={handleChange}
              handleLoginSubmit={handleLoginSubmit}
            />
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={() => setIsRegistering(true)}>
                  Register
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <Register
              formValue={formValue}
              formError={formError}
              handleChange={handleChange}
              handleRegisterSubmit={handleRegisterSubmit}
            />
            <div className="login-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={() => setIsRegistering(false)}>
                  Login
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
