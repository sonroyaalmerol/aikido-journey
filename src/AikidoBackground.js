import React, { useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import { Lightbox } from "react-modal-image";

function Row() {
  const movies = [{
    id: 0,
    url: 'sxZWSLloSaA',
    imageUrl: '/aikidoBackground.png',
    name: 'Aikido Benefits'
  }];
  const [trailerUrl, setTrailerUrl] = useState('');
  
  const youtubeOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const toggleHistory = () => {
    setTrailerUrl((prev) => {
      if (prev !== 'history') {
        return 'history';
      }
      return '';
    });
  }

  return (
    <div className="row">
      <h2>Aikido Background</h2>
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
        <img
          onClick={() =>
            setTrailerUrl('history')
          }
          key='history'
          className="row__poster"
          src='historyThumbnail.png'
          alt='History of Aikido'
        />
        {/* </div> */}
      </div>
      {trailerUrl !== "" && trailerUrl !== 'history' && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
      {trailerUrl === 'history' ? (
        <Lightbox
          medium="/history.png"
          large="/history.png"
          alt="History of Aikido"
          hideZoom={false}
          onClose={toggleHistory}
        />
      ) : null}
    </div>
  );
}

export default Row;
