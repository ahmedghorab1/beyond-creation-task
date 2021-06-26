import React from "react";

const SlidingMenu = () => {
  return (
    <div id="sliding-menu">
      <div className="sliding-menu-top">MENU</div>
      <div className="sliding-menu-content">
        <ul>
          <li>HOME</li>
          <li>
            OUR GROUP
            <i className="golden ml-10 fas fa-caret-right"></i>
          </li>
          <li>
            OUR ACTIVITIES
            <i className="golden ml-10 fas fa-caret-right"></i>
          </li>
          <li>SUSTAINABILITY</li>
          <li>MEDIA</li>
          <li>CAREERS</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default SlidingMenu;
