import React from "react"
import { Link } from "react-router-dom"

const HomeCard = ({ item, source }) => {
  const { id, cover, name, rating, time, desc, starring, genres, tags } = item;
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                <i className='fas fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star-half'></i>
              </div>
              <label>{rating}(Imdb)</label>
              <span>GP</span>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genres}
              </h4>
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
            <Link to={`/singlepage/${source}/${id}`}>
              <button className='primary-btn'>
                <i className='fas fa-play'></i> PLAY NOW
              </button>
            </Link>
          </div>
          <div className='palyButton row'>
          <Link to={`/singlepage/${source}/${id}`}>
              <button>
                <div className='img'>
                  <img src='./images/play-button.png' alt='' />
                  <img src='./images/play.png' className='change' />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .primary-btn {
          transition: background-color 0.3s ease;
        }
        .primary-btn:hover {
          background-color: #555;
        }
      `}</style>
    </>
  )
}

export default HomeCard