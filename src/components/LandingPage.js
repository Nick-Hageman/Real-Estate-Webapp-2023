import React, { Component } from 'react';
import '../LandingPage.css';

export default function LandingPage() {
    return (
      <div>
        <video id="bgVideo" autoPlay muted loop>
            <source src='img/backgroundFootageTrimmed.mp4' type="video/mp4" />
        </video>
      </div>
    );
}
