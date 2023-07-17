import React, { Component, useState, useEffect } from 'react';
import '../LandingPage.css';
import HouseCard from './HouseCard'

export default function Floorplans() { // going to map contents from CMS
  const [dataset, setDataset] = useState([]); // CMS API data


  async function logData() {
    const response = await fetch("https://house-card.onrender.com/api/housecards");
    const information = await response.json();
    setDataset(information.data);
  }

  useEffect(() => { // executes on load and fetches CMS data
    logData();
  }, []);

  return (
    <div className='HouseCard-container'>
      {dataset.map(data =>
        <div className='HouseCard-item'>
          <HouseCard data={data}/>
        </div>
      )}
    </div>
  );
}
