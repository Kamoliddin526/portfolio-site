import React from "react";
import Nav from "../MainComponents/Navbar";
import Block from "../MainComponents/HomeBar";
import Vacation from "../MainComponents/VacationBar";
import Offers from "../MainComponents/OfferBar";
import Browse from "../MainComponents/BrowserBar";
import Plan from "../MainComponents/PlanBar";
import Community from "../MainComponents/ConnectBar";
import Footer from "../MainComponents/FooterBar";
import Support from "../MainComponents/TravelFooterBar";
import FooterBarMedia from "../MainComponents/FooterBarMedia";

export default function Home() {
  return (
    <div>
      <Nav />
      <Block />
      <Vacation />
      <Offers />
      <Browse />
      <Plan />
      <Community />
      <Footer />
      <Support />
      <FooterBarMedia />
    </div>
  );
}
