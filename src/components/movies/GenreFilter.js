// components/movies/GenreFilter.js
import React from "react";

const GenreFilter = ({ onCategoryChange }) => {
  const categories = [
    { label: "Best Rating", value: "homeData"},
    { label: "Anime", value: "anime" },
    { label: "Action", value: "action" },
    { label: "Vietnamese Movies", value: "phimviet" },
];

  return (
    <div className="genre-filter">
      <select
        className="genre-button"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;









