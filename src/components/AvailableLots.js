import React, { Component } from 'react';
import LotData from './LotData';
import '../LandingPage.css';

export default function AvailableLots() {
    return (
      <div className='lot-data-container'>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BTGHYW6WZXKU6vh-igcNvV2iWKuxkOo&ehbc=2E312F" className='lot-map'></iframe>
        <LotData />
      </div>
    );
}
