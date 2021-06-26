import React from "react";
import imgSrc from "../assets/chalhoub_in_numbers.png";

const HorizontalSlider = () => {
  return (
    <div
      id="horizontalSlider"
      className="carousel slide carousel-dark horizontal-slider-padding"
      data-bs-ride="carousel"
      data-pause="hover"
      data-keyboard="true"
    >
      <h1 className="horizontal-slider-title metalic-blue">
        Chalhoub
        <br />
        <span className="metalic-golden">in numbers</span>
      </h1>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#horizontalSlider"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#horizontalSlider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#horizontalSlider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active container-fluid">
          <img src={imgSrc} className="d-block w-100" alt="Chalhoub in numbers" />
        </div>
        <div className="carousel-item container-fluid">
          <img src={imgSrc} className="d-block w-100" alt="Chalhoub in numbers" />
        </div>
        <div className="carousel-item container-fluid">
          <img src={imgSrc} className="d-block w-100" alt="Chalhoub in numbers"/>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#horizontalSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#horizontalSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HorizontalSlider;
