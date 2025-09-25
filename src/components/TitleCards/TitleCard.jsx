import React, { useEffect } from 'react';
import { useRef } from 'react';
import './TitleCard.css';
import card_data from '../../image/cards/Cards_data';

const TitleCard = ({title , category}) => {

  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  // you can remove the array dependencies on this useEffect
  useEffect(() => {
    cardsRef.current.addEventListener('wheel' , handleWheel);
    // return () => {
    //   cardsRef.current.removeEventListener('wheel' , handleWheel);
    // }
  },[cardsRef])

  return (
    <div className='title-card'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      {/* also you can remove the onWheel event */}
      <div className="card-container" ref={cardsRef} onWheel={handleWheel}>
        {
          card_data.map((card , index) => (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TitleCard