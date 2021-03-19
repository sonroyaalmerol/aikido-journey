import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('/banner.png')`, //optional chaining: no need to check if movie is undefined '?' saw this neat trick on stackoverflow
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__bg" />
      <div className="banner__contents">
        <h1 className="banner__title">
          The Aikido Journey
        </h1>
        <h1 className="banner__subtitle">
          of Son Roy Almerol
        </h1>
        <button className="banner__button" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          Play Series
        </button>
        <p className="banner__description">
        Son Roy Almerol is a 2nd year BS Computer Science student from Ateneo de Davao University. With no background in any martial arts, he tries to learn his first one, Aikido. 
        </p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
