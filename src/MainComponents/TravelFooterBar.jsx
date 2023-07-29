import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from "../App";

const Support = () => {
  return (
    <div className="TravelFooterBar">
      <div className="logo">
        <h1>Trxvl.</h1>
      </div>
      <div className="links">
        <div className="help">
          <p>Seslendirme ve Alt Jazz</p>
          <p>Media Market</p>
          <p>Gillie</p>
          <p>Size Last</p>
        </div>
        <div className="help">
          <p>Self Betimes</p>
          <p>Yatırımcı İlişkileri</p>
          <p>Basal Himmler</p>
        </div>
        <div className="help">
          <p>Yard Market</p>
          <p>Is İmkanları</p>
          <p>Car Tercihleri</p>
        </div>
        <div className="help">
          <p>Hedge Karla</p>
          <p>Mullein Koşulları</p>
          <p>Autumnal Bulgier</p>
        </div>
      </div>
      <div className="social">
        <div className="p">
          <button className="helmet">Helmet KOD</button>
          <p className="social__link">
            © 1997-2021 Netflix, Inc. (i-062d573a0ee099242)
          </p>
        </div>
        <div className="socials">
          <Link to={"https://www.facebook.com/Solo256256"}>
            <img
              src={require("../Assets/Images/1-landing/facebook.png")}
              alt=""
            />
          </Link>
          <Link to={"https://www.instagram.com/_bmw.universe_/"}>
            {" "}
            <img
              src={require("../Assets/Images/1-landing/instagram.png")}
              alt=""
            />
          </Link>
          <Link to={"https://twitter.com/home"}>
            <img
              src={require("../Assets/Images/1-landing/twitter.png")}
              alt=""
            />
          </Link>
          <Link to={"https://www.youtube.com/channel/UC_Z_Q2S7vUEhkBO_b7Z_OAg"}>
            <img
              src={require("../Assets/Images/1-landing/youtube.png")}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Support;
