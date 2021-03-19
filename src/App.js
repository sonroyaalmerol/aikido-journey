import React from "react";
import "./App.css";
import Row from "./Row";
import History from "./History";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <History />
    </div>
  );
}

export default App;
