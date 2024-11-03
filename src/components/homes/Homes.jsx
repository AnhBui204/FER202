import React, { useState, useEffect } from "react";
import "./home.css";
import Home from "./Home";

const Homes = () => {
  const [items, setItems] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/homeData");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <section className="home">
        <Home items={items} source="home" />
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Homes;
