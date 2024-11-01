import "./App.css";
import "./index.css";
import HomePage from "./home/HomePage";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./components/watch/SinglePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ManageMovie from "./components/admin/ManageMovie";
import MovieContextProvider from "./components/admin/MovieContext";

function App() {
  return (
    <>
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
        </Routes>
        <Footer />
      </Router> */}
      <Router>
        <MovieContextProvider>
          <div className="container">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>  {/* Sử dụng Routes thay vì Switch */}
                <Route path="/" element={<ManageMovie />} />  {/* Sử dụng element thay vì component */}
              </Routes>
            </Suspense>
          </div>
        </MovieContextProvider>
      </Router>
    </>
  );
}

export default App;
