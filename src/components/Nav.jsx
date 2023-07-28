import React from "react";
import "../App.scss";
import '../Components/Navbar/Navbar.scss'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        {" "}
        <h2>trxvl.</h2>{" "}
      </div>
      <div className="menu">
        <Link to={"/"}>Home</Link>
        <Link to={"/page_2"}>Stays</Link>
        <Link>Flights</Link>
        <Link>Packages</Link>
        <Link>Sign Up</Link>
      </div>
    </div>
  );
};

export default Nav;
