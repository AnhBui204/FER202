import React, { useState, useEffect } from "react";
import Homes from "../components/homes/Homes";
import PhimViet from "../components/PhimViet/Trending";
import Anime from "../components/upcoming/UpAnime";
import Action from "../components/upcoming/UpAction";

const HomePage = () => {
  const [animeItems, setAnimeItems] = useState([]);
  const [actionItems, setActionItems] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    // Fetch Anime data
    const fetchAnime = async () => {
      try {
        const response = await fetch("http://localhost:5000/anime");
        const data = await response.json();
        setAnimeItems(data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    // Fetch Action data
    const fetchAction = async () => {
      try {
        const response = await fetch("http://localhost:5000/action");
        const data = await response.json();
        setActionItems(data);
      } catch (error) {
        console.error("Error fetching action data:", error);
      }
    };

    // Fetch Recommended data
    const fetchRecommended = async () => {
      try {
        const response = await fetch("http://localhost:5000/recommended");
        const data = await response.json();
        setRecommendedItems(data);
      } catch (error) {
        console.error("Error fetching recommended data:", error);
      }
    };

    fetchAnime();
    fetchAction();
    fetchRecommended();
  }, []);

  return (
    <>
      <Homes />
      <Anime items={animeItems} title="Anime" />
      <Action items={actionItems} title="Action" /> 
      <PhimViet />
      {/* Uncomment and add recommended component when ready */}
      {/* <Upcomming items={recommendedItems} title="Recommended Movies" /> */}
    </>
  );
};

export default HomePage;
