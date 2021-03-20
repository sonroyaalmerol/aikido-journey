import React, { useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import { Lightbox } from "react-modal-image";

function Row() {
  const movies = [
    {
      id: 'drills1',
      url: '6Je8ZH5iM04',
      imageUrl: '/aikidoExercises.png',
      name: 'Aikido Exercise Drills'
    },
    {
      id: 'drills2',
      url: 'hGGCPB_w-H8',
      imageUrl: '/prelimExercises.png',
      name: 'Aikido Preliminary Exercises'
    },
  ];
  const [trailerUrl, setTrailerUrl] = useState('');
  
  const youtubeOpts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const toggleCore = () => {
    setTrailerUrl((prev) => {
      if (prev !== 'core') {
        return 'core';
      }
      return '';
    });
  }

  return (
    <div className="row">
      <h2>Exercise Drills and Core Movements</h2>
      <div className="row__posters">
        <img
          onClick={() =>
            window.open('https://drive.google.com/drive/folders/1CV5TfkgA-6-5oQwe7lZs0ZlDwLtKqskq?usp=sharing', '_blank')
          }
          key='core'
          className="row__poster"
          src='PE-Comics/BackFall.png'
          alt='Aikido Core Movements'
        />
        {movies.map((movie) => (
          <img
            onClick={() =>
              setTrailerUrl((prev) => {
                if (prev === movie.url) {
                  return '';
                }
                return movie.url
              })
            }
            key={movie.id}
            className="row__poster"
            src={movie.imageUrl}
            alt={movie.name}
          />
        ))}
        {/* </div> */}
      </div>
      {trailerUrl !== "" && trailerUrl !== 'history' && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
      {trailerUrl === 'core' ? (
        <Lightbox
          medium="/history.png"
          large="/history.png"
          alt="History of Aikido"
          hideZoom={false}
          onClose={toggleCore}
        />
      ) : null}
    </div>
  );
}

export default Row;
