import React from "react";
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import AikidoBackground from './AikidoBackground';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <AikidoBackground />
    </div>
  );
}

export default App;
