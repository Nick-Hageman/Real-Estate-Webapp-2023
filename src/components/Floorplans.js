import React, { Component } from 'react';
import '../LandingPage.css';
import HouseCard from './HouseCard'

export default function Floorplans() { // going to map contents from CMS
    return (
      <div className='HouseCard-container'>
        <div className='HouseCard-item'>
          <HouseCard />
        </div>
        <div className='HouseCard-item'>
          <HouseCard />
        </div>
        <div className='HouseCard-item'>
          <HouseCard />
        </div>
        <div className='HouseCard-item'>
          <HouseCard />
        </div>
        <div className='HouseCard-item'>
          <HouseCard />
        </div>
      </div>
    );
}
