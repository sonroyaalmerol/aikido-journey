import React from "react";
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import AikidoBackground from './AikidoBackground';
import ExerciseDrills from './ExerciseDrills';
import AikidoTechniques from './AikidoTechniques';

function App() {
  const bgRef = React.useRef();
  const playSeries = () => {
    bgRef.current.scrollIntoView();
  }

  return (
    <div className="app">
      <Nav />
      <Banner onPlay={playSeries} />
      <div ref={bgRef} />
      <AikidoBackground />
      <ExerciseDrills />
      <AikidoTechniques />
    </div>
  );
}

export default App;
