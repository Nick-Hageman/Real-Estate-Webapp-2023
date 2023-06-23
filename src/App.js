import './App.css';

import React from 'react'
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AvailableLots from "./components/AvailableLots";

function App() {

  const [page, setPage] = React.useState("Home");

  function handleClick(page) {
    setPage(page);
  }

  return (
    <div className="App">
      <Navbar handleClick={handleClick} />
      {page === "Home" ? <LandingPage /> : <AvailableLots />}
    </div>
  );
}

export default App;
