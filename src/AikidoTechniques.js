import React, { useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import { Lightbox } from "react-modal-image";

function Row() {
  const movies = [
    {
      id: 'techniques1',
      url: 'uA0hOyLLgIQ',
      imageUrl: '/sumiOtoshi.png',
      name: 'Sumi Otoshi'
    },
    {
      id: 'techniques2',
      url: '9tMdgrnexxA',
      imageUrl: '/shomenUchi.png',
      name: 'Shomen Uchi Ai Hanmi Dai Ikkyo'
    },
    {
      id: 'techniques3',
      url: 'KRN3huo81Js',
      imageUrl: '/katateDori.png',
      name: 'Katate Dori Ai Hanmi Dai Ikkyo'
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
      <h2>Aikido Techniques</h2>
      <div className="row__posters">
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
