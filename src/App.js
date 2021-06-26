import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import SlidingMenu from "./components/SlidingMenu";
import VerticalSlider from "./components/VerticalSlider";
import HorizontalSlider from "./components/HorizontalSlider";
function App() {
  const [isSlidingMenu, setSlidingMenu] = useState(false);
  const menuToggle = (toggle) => {
    if (toggle) {
      document.body.classList.add("no-vertical-scroll");
    } else {
      document.body.classList.remove("no-vertical-scroll");
    }
    setSlidingMenu(toggle);
  };
  return (
    <div className={`App ${isSlidingMenu ? "slidemenu-active" : ""}`}>
      <Banner />
      <NavBar menuToggle={menuToggle} />
      <SlidingMenu />
      <VerticalSlider />
      <HorizontalSlider />
    </div>
  );
}

export default App;
