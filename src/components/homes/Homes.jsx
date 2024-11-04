import React, { useState, useEffect } from "react"
import "./home.css"
import { homeData } from "../../dummyData"
import Home from "./Home"

const Homes = () => {
  const [items, setItems] = useState(homeData)
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
      <section className='home'>
        <Home items={items} source="homeData" />
      </section>
      <div className='mragin'></div>
    </>
  )
}

export default Homes