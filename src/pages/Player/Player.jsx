import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Player.css';
import back_arrow_icon from '../../image/back_arrow_icon.png';

const Player = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTY4YTdlZWNlMGYwMWNlNWMyODBlNzIzNTg3ODQ1MCIsIm5iZiI6MTc1ODg1NTk2Ni4wMTgsInN1YiI6IjY4ZDYwMzFlOTc1YWMzYmMzY2M4MzQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rihS9N_bywmQ9_xP_9SGazhNZtWzpXIekFlHwGc9q1o'
    }
  };

  useEffect(() => {
    if (!id) {
      setError('No movie ID provided');
      setLoading(false);
      return;
    }

    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.status_message || 'Failed to fetch video data');
        }

        if (!data.results || data.results.length === 0) {
          throw new Error('No video available for this movie');
        }

        // Find the first trailer or teaser video
        const video = data.results.find(
          (video) => video.type === 'Trailer' || video.type === 'Teaser'
        ) || data.results[0]; // Fallback to first video if no trailer/teaser found

        setApiData(video);
      } catch (err) {
        console.error('Error fetching video data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [id]);

  if (loading) {
    return (
      <div className="player-loading">
        <p>Loading video...</p>
      </div>
    );
  }

  if (error || !apiData) {
    return (
      <div className="player-error">
        <p>Error: {error || 'Failed to load video'}</p>
        <button onClick={() => navigate(-1)} className="back-button">
          <img src={back_arrow_icon} alt="Go back" />
          <span>Go Back</span>
        </button>
      </div>
    );
  }

  return (
    <div className='player'>
      <button onClick={() => navigate(-1)} className="back-button">
        <img src={back_arrow_icon} alt="Go back" />
      </button>
      {apiData.key ? (
        <iframe 
          src={`https://www.youtube.com/embed/${apiData.key}`} 
          width="90%" 
          height="90%" 
          frameBorder="0" 
          allowFullScreen
          title={apiData.name || 'Movie Player'}
        ></iframe>
      ) : (
        <div className="no-video">
          <p>Video not available</p>
        </div>
      )}
      <div className="player-info">
        {apiData.published_at && <p>{new Date(apiData.published_at).toLocaleDateString()}</p>}
        {apiData.name && <p>{apiData.name}</p>}
        {apiData.type && <p>{apiData.type}</p>}
      </div>
    </div>
  );
};

export default Player;