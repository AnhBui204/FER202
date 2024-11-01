import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoginForm from "./components/LoginForm/LoginForm";
import SinglePage from "./components/watch/SinglePage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  return (
    <Router>
      <Routes>
        {/* Route cho trang đăng nhập, không có Header và Footer */}
        <Route
          path="/login"
          element={<LoginForm setIsLoggedIn={setIsLoggedIn} />}
        />
        {/* Route cho các trang chính */}
        <Route
          path="/"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/singlepage/:id"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <SinglePage />
              <Footer />
            </>
          }
        />
        {/* Route cho Admin */}
        <Route path="/admin" element={<div />} /> {/* Route cho Admin */}
        {/* Điều hướng về trang đăng nhập nếu không đăng nhập */}
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
