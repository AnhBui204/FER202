import React, { useState } from "react";

const ForgotPassword = ({
  handleForgotPasswordSubmit,
  handleBackToLogin,
  fetchUsers, // Nhận fetchUsers từ props
}) => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleForgotPasswordSubmit(
      username,
      setMessage,
      setError,
      setIsUsernameValid
    );
  };

  const handlePasswordUpdate = async () => {
    if (!newPassword) {
      setError("New password is required");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:3001/users?username=${username}`
      );
      const users = await response.json();
      const user = users[0];

      if (user) {
        await fetch(`http://localhost:3001/users/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...user, password: newPassword }),
        });

        setMessage("Password updated successfully!");
        setNewPassword("");
        setError("");
        await fetchUsers();
        setTimeout(() => {
          handleBackToLogin();
        }, 1000);
      } else {
        setError("User not found");
      }
    } catch (error) {
      setError("An error occurred while updating the password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Forgot Password</h1>
      <div className="input-box">
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <div className="error-feedback">{error}</div>}
      </div>
      {isUsernameValid ? (
        <>
          <div className="input-box">
            <input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handlePasswordUpdate}>
            Update Password
          </button>
        </>
      ) : (
        <button type="submit">Submit</button>
      )}
      {message && <div className="success-feedback">{message}</div>}
      <button type="button" onClick={handleBackToLogin}>
        Back to Login
      </button>
    </form>
  );
};

export default ForgotPassword;
