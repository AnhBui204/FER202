import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { source, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${source}/${id}`);
        if (response.ok) {
          const data = await response.json();
          setItem(data);
        } else {
          setItem(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, [source, id]);

  return (
    <>
      {item ? (
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
      ) : (
        <p>No item found</p>
      )}
    </>
  );
};

export default SinglePage;
