import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURRE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="her0-btns"></div>
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        GET STARTED
      </Button>
      <Button
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        WATCH TRAILER <i className="far fa-play-circle"></i>
      </Button>
    </div>
  );
}

export default HeroSection;
