import React from "react";
import "../App.scss";
import { Link } from "react-router-dom";
import Slide from 'react-reveal/Slide';

const Nav = () => {
  return (
    <div className="nav">
      <Slide top>
      <div className="logo">
        {" "}
        <h2>trxvl.</h2>{" "}
      </div>
      </Slide>
      <Slide top cascade>
      <div className="menu">
        <Link to={"/"}>Home</Link>
        <Link to={"/page_2"}>Stays</Link>
        <Link>Flights</Link>
        <Link>Packages</Link>
        <Link>Sign Up</Link>
      </div>
      </Slide>
    </div>
  );
};

export default Nav;
