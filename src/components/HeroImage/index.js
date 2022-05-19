import React from "react";
import "./styles.css";
import rightIcon from "../../assets/icons/right.png";

export default function HeroImage() {
  return (
    <div>
      <div className="hero__main-container">
        <div className="hero__img-container">
          <img
            className="hero__img"
            src="https://source.unsplash.com/random/800x500?city,night"
          />
          <div className="hero__img-info">
            <div className="hero__img-title">Night City</div>
            <img src={rightIcon} className="hero__right-icon-img" />
          </div>
        </div>
        <div className="hero__img-container">
          <img
            className="hero__img"
            src="https://source.unsplash.com/random/800x500?gym"
          />
          <div className="hero__img-info">
            <div className="hero__img-title">Gym</div>
            <img src={rightIcon} className="hero__right-icon-img" />
          </div>
        </div>
        <div className="hero__img-container">
          <img
            className="hero__img"
            src="https://source.unsplash.com/random/800x500?running"
          />
          <div className="hero__img-info">
            <div className="hero__img-title">Running</div>
            <img src={rightIcon} className="hero__right-icon-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
