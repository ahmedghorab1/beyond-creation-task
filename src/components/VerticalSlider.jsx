import React, { useState } from "react";
import ceoImage from "../assets/ceo.jpg";
import { scrollTo } from "../utils";
const VerticalSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const slideTo = (n) => {
    setSelectedSlide(n);
    scrollTo(document.querySelector(".vertical-slider-content"), n * 600, 500);
  };
  return (
    <div className="vertical-slider">
      <div className="vertical-slider-content">
        <div className="vertical-slider-content-item">
          <div className="vertical-slider-img">
            <img src={ceoImage} alt="CEO" />
          </div>
          <div className="vertical-slider-text">
            <h1 className="blue bold">
              Chalhoub <br />
              <span className="golden">Group</span>
            </h1>
            <p>
              The Chalhoub Group is the leading partner for luxury across the
              Middle East since 1955. As an expert in retail, distribution and
              marketing services based in Dubai, the Group has become a major
              player in the beauty, fashion and gift sectors regionally.
            </p>
            <p>
              By blending its Middle East expertise and intimate knowledge of
              luxury, the Chalhoub Group is building brands in the region, by
              offering service excellence to all its partners and a unique
              experience to its customers. The Group is moving fast from a
              traditional distributor and retailer for luxury in the Middle East
              to a hybrid retailer bringing luxury experiences to the fingertips
              of customers everywhere.
            </p>
            <div className="vertical-slider-text-btn">
              LEARN MORE
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="vertical-slider-content-item">
          <div className="vertical-slider-img">
            <img src={ceoImage} alt="CEO" />
          </div>
          <div className="vertical-slider-text">
            <h1 className="blue bold">
              Chalhoub <br />
              <span className="golden">Group</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              fermentum leo quis ex eleifend, vel porttitor eros blandit.
              Vestibulum rhoncus, magna vitae luctus tincidunt, turpis sem porta
              nisi, vitae sollicitudin elit nisi non tellus. In nisl lectus,
              finibus non lorem vitae, facilisis egestas ex. Quisque sem massa.
            </p>
            <p>
              Fusce consectetur lectus finibus tortor iaculis semper. Maecenas
              finibus blandit ipsum at vulputate. Mauris malesuada egestas
              ornare. Donec quis pellentesque ex, a efficitur dui. In quam sem,
              tristique sit amet vestibulum non, egestas a turpis. Integer
              lobortis euismod pharetra.
            </p>
            <div className="vertical-slider-text-btn">
              LEARN MORE
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="vertical-slider-content-item">
          <div className="vertical-slider-img">
            <img src={ceoImage} alt="CEO" />
          </div>
          <div className="vertical-slider-text">
            <h1 className="blue bold">
              Chalhoub <br />
              <span className="golden">Group</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              viverra felis in ipsum varius, sit amet commodo orci ultrices.
              Duis viverra sapien risus, in venenatis nunc lobortis ac. Donec
              vel sem laoreet, imperdiet nunc in, ullamcorper mi. Sed hendrerit
              varius iaculis. Integer elementum quam lorem.
            </p>
            <p>
              Duis eu convallis neque. Donec eget pellentesque justo. Aenean
              libero justo, ultrices sit amet eleifend a, venenatis ut lectus.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
              condimentum pellentesque eleifend. Maecenas auctor eget lectus a
              tempus. Nunc fringilla ex in viverra consequat.
            </p>
            <div className="vertical-slider-text-btn">
              LEARN MORE
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="vertical-slider-content-item">
          <div className="vertical-slider-img">
            <img src={ceoImage} alt="CEO" />
          </div>
          <div className="vertical-slider-text">
            <h1 className="blue bold">
              Chalhoub <br />
              <span className="golden">Group</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              viverra felis in ipsum varius, sit amet commodo orci ultrices.
              Duis viverra sapien risus, in venenatis nunc lobortis ac. Donec
              vel sem laoreet, imperdiet nunc in, ullamcorper mi. Sed hendrerit
              varius iaculis. Integer elementum quam lorem.{" "}
            </p>
            <p>
              Duis eu convallis neque. Donec eget pellentesque justo. Aenean
              libero justo, ultrices sit amet eleifend a, venenatis ut lectus.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
              condimentum pellentesque eleifend. Maecenas auctor eget lectus a
              tempus. Nunc fringilla ex in viverra consequat.
            </p>
            <div className="vertical-slider-text-btn">
              LEARN MORE
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="vertical-slider-content-item">
          <div className="vertical-slider-img">
            <img src={ceoImage} alt="CEO" />
          </div>
          <div className="vertical-slider-text">
            <h1 className="blue bold">
              Chalhoub <br />
              <span className="golden">Group</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              viverra felis in ipsum varius, sit amet commodo orci ultrices.
              Duis viverra sapien risus, in venenatis nunc lobortis ac. Donec
              vel sem laoreet, imperdiet nunc in, ullamcorper mi. Sed hendrerit
              varius iaculis. Integer elementum quam lorem.
            </p>
            <p>
              Duis eu convallis neque. Donec eget pellentesque justo. Aenean
              libero justo, ultrices sit amet eleifend a, venenatis ut lectus.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
              condimentum pellentesque eleifend. Maecenas auctor eget lectus a
              tempus. Nunc fringilla ex in viverra consequat.
            </p>
            <div className="vertical-slider-text-btn">
              LEARN MORE
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="vertical-slider-controls">
        <div
          onClick={() => slideTo(0)}
          className={`vertical-slider-controls-item ${
            selectedSlide === 0 ? "active" : ""
          }`}
        />
        <div
          onClick={() => slideTo(1)}
          className={`vertical-slider-controls-item ${
            selectedSlide === 1 ? "active" : ""
          }`}
        />
        <div
          onClick={() => slideTo(2)}
          className={`vertical-slider-controls-item ${
            selectedSlide === 2 ? "active" : ""
          }`}
        />
        <div
          onClick={() => slideTo(3)}
          className={`vertical-slider-controls-item ${
            selectedSlide === 3 ? "active" : ""
          }`}
        />
        <div
          onClick={() => slideTo(4)}
          className={`vertical-slider-controls-item ${
            selectedSlide === 4 ? "active" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default VerticalSlider;
