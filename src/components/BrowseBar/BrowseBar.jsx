import React from "react";
import BrowseCarousel from "./BrowseCarousel";
import "./BrowserBar.scss";
import PlanBg from "./images/PlanBg.jpg";

const BrowseBar = () => {
  return (
    <div>
      <div className="browse__carousel">
        <h2 className="browse__header">Browse by property type</h2>
        <BrowseCarousel />
        <div className="planBg" style={{ backgroundImage: `url(${PlanBg})` }}>
          <h2 className="plan__header">Plan your trip with travel expert</h2>
          <p className="plan__pg">Our professional advisors can craft your perfect itinerary</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseBar;
