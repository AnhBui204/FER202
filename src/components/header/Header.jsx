import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [Mobile, setMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (isDropdownOpen && !event.target.closest(".user-icon")) {
      setIsDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header>
      <div className="container flexSB">
        <nav className="flexSB">
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <ul
            className={Mobile ? "navMenu-list" : "flexSB"}
            onClick={() => setMobile(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Series</Link>
            </li>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/">Pages</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <button className="toggle" onClick={() => setMobile(!Mobile)}>
            {Mobile ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
        <div className="account flexSB">
          {isLoggedIn ? (
            <div className="user-icon" onClick={handleDropdownToggle}>
              <img src="/images/user.png" alt="User" />
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {/* Gọi hàm handleLogout khi bấm Logout */}
                  <Link to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
