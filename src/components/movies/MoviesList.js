// // components/movies/MoviesList.js
// import React, { useState } from "react";
// import Action from "../upcoming/UpAction";
// import { mvList, action } from "../../dummyData";
// import GenreFilter from "./GenreFilter";
// import SearchBar from "./SearchBar";
// import LanguageSelector from "./LanguageSelector";
// import Pagination from "./Pagination";
// import "./moviesList.css";
// import { Link } from "react-router-dom"

// /*const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags, video } }) => { */

// const MoviesList = () => {
//   const [movies] = useState(mvList);
//   const [item, setItem] = useState(action);
//   const [currentPage, setCurrentPage] = useState(1);
//   const moviesPerPage = 8;

//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
//   const totalPages = Math.ceil(movies.length / moviesPerPage);

//   return (
//     <>
//       <div className="movies-list-body">
//         <div className="movies-list-header">
//           <h1 className="movies-title">Movies List</h1>
//           {/* <SearchBar /> */}
//         </div>
//         <div className="filter-section">
//           <GenreFilter />
//           <SearchBar />
//           <LanguageSelector />
//         </div>

//         <div className="movies-grid">
//           {currentMovies.map((movie) => (
//             <div key={movie.id} className="movie-card">
//               <div className="image-container">
//                 <img src={movie.cover} alt={movie.name} />
//                 <div className="overlay">
//                   {/* text*/}
//                 </div>
//               </div>
//               <div className="movie-info">
//                 <h4>{movie.name}</h4>
//                 <p>{movie.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>



//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//         />
//       </div>

//       <Action items={item} title='Action' /> 
//     </>
//   );
// };

// export default MoviesList;



























// components/movies/MoviesList.js

// import React, { useState, useEffect } from "react";
// import GenreFilter from "./GenreFilter";
// import SearchBar from "./SearchBar";
// import Pagination from "./Pagination";
// import "./moviesList.css";
// import Action from "../upcoming/UpAction"; // Assuming you still want Action
// import { action } from "../../dummyData";

// const MoviesList = () => {
//   const [movies, setMovies] = useState([]);
//   const [currentCategory, setCurrentCategory] = useState("homeData");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [item, setItem] = useState(action);
//   const moviesPerPage = 8;

//   // Fetch data from JSON server
//   useEffect(() => {
//     fetch(`http://localhost:3000/${currentCategory}`)
//       .then(response => response.json())
//       .then(data => setMovies(data))
//       .catch(error => console.error("Error fetching data:", error));
//   }, [currentCategory]);

//   // Handle pagination
//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
//   const totalPages = Math.ceil(movies.length / moviesPerPage);

//   // Handle category change
//   const handleCategoryChange = (category) => {
//     setCurrentCategory(category);
//     setCurrentPage(1); // Reset to first page when category changes
//   };

//   return (
//     <>
//       <div className="movies-list-body">

//         {/* <div className="filmstrip">
//           <h1>Danh Sách Phim</h1>
//         </div> */}

//         <div className="filter-section">
//           <GenreFilter onCategoryChange={handleCategoryChange} />
//           <SearchBar />
//         </div>

//         <div className="movies-grid">
//           {currentMovies.map((movie) => (
//             <div key={movie.id} className="movie-card">
//               <div className="image-container">
//                 <img src={movie.cover} alt={movie.name} />
//               </div>
//               <div className="movie-info">
//                 <h4>{movie.name}</h4>
//                 <p>
//                   <i className="fas fa-star" style={{ color: 'gold', marginRight: '5px' }}></i>
//                   {movie.rating}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//         />
//       </div>
//       <Action items={item} title='Action' />
//     </>
//   );
// };

// export default MoviesList;
















// components/movies/MoviesList.js

import React, { useState, useEffect } from "react";
import GenreFilter from "./GenreFilter";
import SearchBar from "./SearchBar";
import "./moviesList.css";
import Action from "../upcoming/UpAction"; // Assuming you still want Action

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]); // State để lưu tất cả các phim
  const [filteredMovies, setFilteredMovies] = useState([]); // State để lưu danh sách phim đã lọc
  const [currentCategory, setCurrentCategory] = useState("homeData");
  const [searchTerm, setSearchTerm] = useState(""); // State để lưu giá trị tìm kiếm

  // Fetch data from JSON server
  useEffect(() => {
    fetch(`http://localhost:3000/${currentCategory}`)
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
      <Action items={movies} title='Action' />
    </>
  );
};

export default MoviesList;