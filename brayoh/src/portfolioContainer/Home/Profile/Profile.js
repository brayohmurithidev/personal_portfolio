import React from "react";
import Typical from "react-typical";
import "./profile.css";
import ScrollService from '../../../utilities/ScrollService';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.facebook.com/Deejay-Dephaz-325353291351524"
                target="_blank"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://github.com/brayohmurithidev" target="_blank" >
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/brian-murithi/" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlighted-text">Brian Murithi</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiatstic Dev 🛑",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "Mern Stack Dev 😎",
                    1000,
                    "Cross Platform V 🕸️",
                    1000,
                    "React Dev 📱",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                 Passionate in building application with front and back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
          <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="bdephaz.pdf" download="Bdephaz bdephaz.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
