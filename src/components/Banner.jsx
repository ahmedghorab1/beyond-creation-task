import React from "react";
import bannerVideo from "../assets/chalhoub_video.mp4";

const Banner = () => {
  return (
    <div className="top-section">
      <video className="videoTag" autoPlay loop muted playsInline>
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <div className="top-section-content">
        <h1>
          Leading Partner for luxury
          <br />
          across the middle east
        </h1>
      </div>
    </div>
  );
};

export default Banner;
