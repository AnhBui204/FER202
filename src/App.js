import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./index.css";
import HomePage from "./home/HomePage";
import SinglePage from "./components/watch/SinglePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ManageMovie from "./components/admin/ManageMovie";
import MovieContextProvider from "./components/admin/MovieContext";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  return (
    <Router>
      <MovieContextProvider>
        <div className="container">
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
              path="/singlepage/:source/:id"
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                  <SinglePage />
                  <Footer />
                </>
              }
            />
            {/* Route cho Admin */}
            <Route path="/admin" element={<ManageMovie />} />
            
            {/* Điều hướng người dùng đến trang thích hợp dựa trên trạng thái đăng nhập */}
            <Route
              path="*"
              element={<Navigate to={isLoggedIn ? "/" : "/login"} />}
            />
          </Routes>
        </div>
      </MovieContextProvider>
    </Router>
  );
}

export default App;
