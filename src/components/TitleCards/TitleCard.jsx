import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './TitleCard.css';
// import card_data from '../../image/cards/Cards_data';

const TitleCard = ({title , category}) => {
  const [apiData , setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTY4YTdlZWNlMGYwMWNlNWMyODBlNzIzNTg3ODQ1MCIsIm5iZiI6MTc1ODg1NTk2Ni4wMTgsInN1YiI6IjY4ZDYwMzFlOTc1YWMzYmMzY2M4MzQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rihS9N_bywmQ9_xP_9SGazhNZtWzpXIekFlHwGc9q1o'
    }
  };
  
  // fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  //   .then(res => res.json())
  //   .then(res => setApiData(res.results))
  //   .catch(err => console.error(err));

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  // you can remove the array dependencies on this useEffect
  useEffect(() => {
    // Fetching the data from the TMDB movies
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel' , handleWheel);
  },[cardsRef])

  return (
    <div className='title-card'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      {/* also you can remove the onWheel event */}
      <div className="card-container" ref={cardsRef} onWheel={handleWheel}>
        {
          apiData.map((card , index) => (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
              <p>{card.original_title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TitleCard