import React, { useState, Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MovieContextProvider from "./components/admin/MovieContext";
import MoviesList from "./components/movies/MoviesList";
import LoadingSpinner from "./components/utils/LoadingSpinner"; // Import LoadingSpinner

// Lazy load components
const HomePage = lazy(() => import("./home/HomePage"));
const SinglePage = lazy(() => import("./components/watch/SinglePage"));
const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));
const ManageMovie = lazy(() => import("./components/admin/ManageMovie"));
const LoginForm = lazy(() => import("./components/LoginForm/LoginForm"));


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    if (isLoggedIn) {
      sessionStorage.setItem("isLoggedIn", "true");
    } else {
      sessionStorage.removeItem("isLoggedIn");
      sessionStorage.removeItem("role");
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <MovieContextProvider>
        <div className="">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route
                path="/login"
                element={<LoginForm setIsLoggedIn={setIsLoggedIn} />}
              />
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
              <Route
                path="/movies"
                element={
                  <>
                    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <MoviesList />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/admin"
                // element={<ManageMovie />}
                element={
                  <>
                    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <ManageMovie />
                  </>
                }
              />
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