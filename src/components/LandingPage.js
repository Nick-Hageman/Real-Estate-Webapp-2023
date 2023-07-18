import React from 'react';
import '../LandingPage.css';

export default function LandingPage() {
    return (
      <div>
        <div>
          <video id="bgVideo" autoPlay muted loop>
              <source src='img/backgroundFootageTrimmed.mp4' type="video/mp4" />
          </video>
        </div>
        <div class="overlay"></div>
        <div class="landing-text">
            <h2>Castle Hill</h2>
            <h3>Subdivision</h3>
            <p>Hageman Homes is a real estate development and residential construction business in Dyersville, Iowa.</p>
            <a href="img/castle_hill.PNG">Plat Map</a>
        </div>
      </div>
    );
}
