import React from "react";
import "./HomeBar.scss";
import SearchIcon from "./icons/search-icon.jpg";
import Calendar from "./icons/calendar.png";
import User from "./icons/user.png";
import Beach from "./icons/beach.png";
import Deserts from "./icons/deserts.png";
import Mountains from "./icons/mountains.png";
import IconicCities from "./icons/iconicCities.png";
import HouseBoats from "./icons/houseboats.png";
import CountrySide from "./icons/countryside.png";
import Camping from "./icons/camping.png";
import Castles from "./icons/castles.png";
import Skiing from "./icons/skiing.png";
import Tropical from "./icons/tropical.png";
import CarouselDesti from "./Carousel";
const HomeBar = () => {
  return (
    <div className="home__bar">
      <h1 className="home__header">
        The whole world <br /> awaits.
      </h1>
      <div className="input__bar">
        <div className="input__type">
          <img src={SearchIcon} alt="" />
          <input type="text" placeholder="Search destinations, hotels" />
        </div>
        <div className="input__icons">
          <div className="icon__item">
            <img className="icon" src={Calendar} alt="" />
            <label>Check in</label>
          </div>
          <div className="icon__item">
            <img className="icon" src={Calendar} alt="" />
            <label>Check out</label>
          </div>
          <div className="icon__item">
            <img className="icon" src={User} alt="" />
            <label>1 room, 2 adults</label>
          </div>
          <div className="icon__item">
            <button className="search__btn">Search</button>
          </div>
        </div>
      </div>
      <div className="categories">
        <h2 className="category__header">Top categories</h2>
        <div className="category__icons">
          <div className="category__icon">
            <img className="ct_icon" src={Beach} alt="" />
            <h4 className="ct_pg">Beaches</h4>
          </div>
          <div className="category__icon">
            <img className="ct_icon" src={Deserts} alt="" />
            <h4 className="ct_pg">Deserts</h4>
          </div>
          <div className="category__icon">
            <img className="ct_icon" src={Mountains} alt="" />
            <h4 className="ct_pg">Mountains</h4>
          </div>
          <div className="category__icon">
            <img className="ct_icon" src={IconicCities} alt="" />
            <h4 className="ct_pg">Iconic Cities</h4>
          </div>
          <div className="category__icon">
            <img className="ct_icon" src={HouseBoats} alt="" />
            <h4 className="ct_pg">HouseBoats</h4>
          </div>
          <div className="category__icon">
            <img className="ct_icon" src={CountrySide} alt="" />
            <h4 className="ct_pg">CountrySide</h4>
          </div>
          <div className="category__icon">
            <img className="ct_icon" src={Camping} alt="" />
            <h4 className="ct_pg">Camping</h4>
          </div>
          <div className="category__icon">
            <img className="ct_icon" src={Castles} alt="" />
            <h4 className="ct_pg">Castles</h4>
          </div>
          <div className="category__icon">
            <img className="ct_icon" src={Skiing} alt="" />
            <h4 className="ct_pg">Skiing</h4>
          </div>
          <div className="category__icon">
            <img className="ct_icon" src={Tropical} alt="" />
            <h4 className="ct_pg">Tropical</h4>
          </div>
        </div>
      </div>
      <div className="desti__carousel">
        <h2 className="desti__header">Top Vacation destinations</h2>
        <CarouselDesti/>
      </div>
    </div>
  );
};

export default HomeBar;
