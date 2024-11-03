// LoginForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import backgroundImage from "../Assets/background.png";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword"; // Import the ForgotPassword component
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
  const { users, fetchUsers } = useFetchUsers();
  const [isForgotPassword, setIsForgotPassword] = useState(false);

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

      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      fetchUsers();
      setSuccessMessage("Registration successful! Please log in.");
      setIsRegistering(false);
      navigate("/login", { replace: true });
    }
  };

  const handleForgotPasswordSubmit = async (
    username,
    setMessage,
    setError,
    setIsUsernameValid
  ) => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();
      const user = users.find((user) => user.username === username);
      if (user) {
        setMessage("Please input new password.");
        setIsUsernameValid(true);
      } else {
        setError("Username not found. Please try again.");
        setIsUsernameValid(false);
      }
    } catch {
      setError("An error occurred. Please try again later.");
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
        {!isRegistering && !isForgotPassword ? (
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
                <button
                  type="button"
                  className="link-button"
                  onClick={() => setIsRegistering(true)}
                >
                  Register
                </button>
              </p>
            </div>
            <div className="forgot-password-link">
              <p>
                <button
                  type="button"
                  className="link-button"
                  onClick={() => setIsForgotPassword(true)}
                >
                  Forgot Password?
                </button>
              </p>
            </div>
          </>
        ) : isForgotPassword ? (
          <ForgotPassword
            handleForgotPasswordSubmit={handleForgotPasswordSubmit}
            handleBackToLogin={() => setIsForgotPassword(false)}
            fetchUsers={fetchUsers}
          />
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
                <button
                  type="button"
                  className="link-button"
                  onClick={() => setIsRegistering(false)}
                >
                  Login
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
