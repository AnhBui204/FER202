import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./index.css";
import MovieContextProvider from "./components/admin/MovieContext"; // Move this to the top

// Lazy load components
const HomePage = lazy(() => import("./home/HomePage"));
const SinglePage = lazy(() => import("./components/watch/SinglePage"));
const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));
const ManageMovie = lazy(() => import("./components/admin/ManageMovie"));
const LoginForm = lazy(() => import("./components/LoginForm/LoginForm"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  return (
    <Router>
      <MovieContextProvider>
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </div>
      </MovieContextProvider>
    </Router>
  );
}

export default App;
