import React, { useState, useEffect } from 'react';
import '../LandingPage.css';
import HouseCard from './HouseCard'

export default function Floorplans() { // going to map contents from CMS
  const [dataset, setDataset] = useState([]); // CMS API data


  async function logData() {
    //const response = await fetch("https://house-card.onrender.com/api/housecards");
    const response = require('./sample.json'); // hard-coded JSON to save load time, don't want to pay for faster API.
    //const information = await response.json();
    setDataset(response.data);
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
