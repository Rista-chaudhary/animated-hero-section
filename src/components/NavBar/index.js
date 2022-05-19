import React from "react";
import "./style.css";
import liveImg from "../../assets/icons/live.png";
import membershipImg from "../../assets/icons/membership.png";
import runningImg from "../../assets/icons/running.png";
import moreImg from "../../assets/icons/more.png";
import userImg from "../../assets/icons/user.png";

export default function NavBar() {
  return (
    <div className="parent-container">
      <div className="menu-container">HF</div>
      <div className="navbar-list-container">
        <div className="live-container">
          <div>
            <img src={liveImg} />
          </div>
          <div>LIVE</div>
        </div>
        <div className="membership-container">
          <div>
            <img src={membershipImg} alt="" />
          </div>
          <div>MEMBERSHIPS</div>
        </div>
        <div className="plans-container">
          <div>
            <img src={runningImg} alt="" />
          </div>
          <div>PLANS</div>
        </div>
        <div className="more-container">
          <div>
            <img src={moreImg} alt="" />
          </div>
          <div>MORE</div>
        </div>
      </div>
      <div className="login-icon-container">
        <div className="icon-container">
          <img src={userImg} />
        </div>
        <div className="login-container">Login</div>
      </div>
    </div>
  );
}
