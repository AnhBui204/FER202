// components/movies/MoviesList.js

import React, { useState, useEffect } from "react";
import GenreFilter from "./GenreFilter";
import SearchBar from "./SearchBar";
import "./moviesList.css";
import Action from "../upcoming/UpAction"; // Assuming you still want Action
import { Link } from "react-router-dom";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]); // State để lưu tất cả các phim
  const [filteredMovies, setFilteredMovies] = useState([]); // State để lưu danh sách phim đã lọc
  const [currentCategory, setCurrentCategory] = useState("homeData");
  const [searchTerm, setSearchTerm] = useState(""); // State để lưu giá trị tìm kiếm

  // Fetch data from JSON server
  useEffect(() => {
    fetch(`http://localhost:5000/${currentCategory}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setAllMovies(data); // Cập nhật tất cả các phim khi dữ liệu mới được tải
        setFilteredMovies(data); // Cập nhật danh sách phim đã lọc
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [currentCategory]);

  // Hàm để xử lý việc tìm kiếm
  useEffect(() => {
    const filtered = allMovies.filter(movie =>
      movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchTerm, allMovies]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setSearchTerm(""); // Reset search term khi thay đổi thể loại
  };

  return (
    <>
      <div className="movies-list-body">
        <div className="filter-section">
          <GenreFilter onCategoryChange={handleCategoryChange} />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="image-container">
                <img src={movie.cover} alt={movie.name} />
                <div className="overlay">
                  <div className="playButton row">
                    <Link to={`/singlepage/${currentCategory}/${movie.id}`}>
                      <button className="Watch">
                        Play Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="movie-info">
                <h4>{movie.name}</h4>
                <p>
                  <i className="fas fa-star" style={{ color: 'gold', marginRight: '5px' }}></i>
                  {movie.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Action items={movies} title='Movie' />
    </>
  );
};

export default MoviesList;
