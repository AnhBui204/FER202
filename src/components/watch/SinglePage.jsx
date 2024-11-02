import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { homeData, phimviet, recommended, anime, action } from "../../dummyData";
import Upcomming from "../upcoming/UpAnime";

const SinglePage = () => {
  const { source, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let foundItem = null;
    if (source === "home") {
      foundItem = homeData.find((item) => item.id === parseInt(id));
    } else if (source === "anime") {
      foundItem = anime.find((item) => item.id === parseInt(id));
    } else if (source === "action") {
      foundItem = action.find((item) => item.id === parseInt(id));
    } else if (source === "phimviet") {
      foundItem = phimviet.find((item) => item.id === parseInt(id));
    }

    if (foundItem) {
      setItem(foundItem);
    }
  }, [source, id]);


  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name}</h1> <span>| {item.time} |</span> <span>HD</span>
            </div>
            <div className="container">
            <video controls preload="auto">
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
              <div className="para">
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="social">
                <h3>Share:</h3>
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
                <img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" alt="Twitter" />
                <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" alt="LinkedIn" />
              </div>
            </div>
          </section> 
        </>
      ) : (
        <p>No item found</p>
      )}
    </>
  );
};

export default SinglePage;
