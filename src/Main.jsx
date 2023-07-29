import React from "react";
import "./App.scss";
import "./Main.scss";
import Nav from "./MainComponents/Navbar";
import Block from "./MainComponents/HomeBar";
import PopularCard from "./SecondPageComponent/PopularCard";
import Support from "./MainComponents/TravelFooterBar";
import FooterBarMedia from "./MainComponents/FooterBarMedia";

const Root = () => {
  return (
    <div className="container1">
      <Nav />
      <Block />
      <PopularCard />
      <Support />
      <FooterBarMedia />
    </div>
  );
};

export default Root;
