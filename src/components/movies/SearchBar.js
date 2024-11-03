// components/movies/SearchBar.js
import React from "react";
import "./moviesList.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search... 🔍"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật giá trị tìm kiếm khi người dùng nhập
      />
    </div>
  );
};

export default SearchBar;

