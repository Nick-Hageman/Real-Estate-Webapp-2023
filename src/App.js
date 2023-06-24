import './App.css';

import React from 'react'
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AvailableLots from "./components/AvailableLots";
import Portfolio from "./components/Portfolio";
import Floorplans from "./components/Floorplans";

function App() {

  const [page, setPage] = React.useState("Home");

  function handleClick(page) {
    setPage(page);
  }

  return (
    <div className="App">
      <Navbar handleClick={handleClick} />
      {page === "Home" ? <LandingPage /> : page === "Available Lots" ? <AvailableLots /> :  page === "Portfolio" ? <Portfolio /> : <Floorplans />}
    </div>
  );
}

export default App;
