import React from "react";
import { Carousel } from "antd";
import ConnectImg from "./images/ConnectImg.jpg";
import ConnectImg2 from "./images/ConnectImg2.jpg";
import ConnectImg3 from "./images/ConnectImg3.jpg";
import ConnectImg4 from "./images/ConnectImg4.jpg";
import "./ConnectBar.scss";

const ConnectCarousel = () => (
  <Carousel autoplay>
    <div className="connect_csl">
      <h2>Connect with other travelers in our community</h2>
      <div className="connect__carousel">
        <div>
          <img className="carousel__img" src={ConnectImg} alt="" />
        </div>
        <div>
          <span className="connect__header">India</span>
          <h2 className="connect__hd_txt">Travel community</h2>
          <p className="connect_pg">155,073 travelers</p>
        </div>
        <div>
          <img className="carousel__img" src={ConnectImg2} alt="" />
        </div>
        <div>
          <span className="connect__header">Travel Talk</span>
          <h2 className="connect__hd_txt">Travel community</h2>
          <p className="connect_pg">155,073 travelers</p>
        </div>
      </div>
    </div>
    <div>
      <div className="connect__carousel">
        <div>
          <img className="carousel__img" src={ConnectImg2} alt="" />
        </div>
        <div>
          <span className="connect__header">Beach</span>
          <h2 className="connect__header">Travel community</h2>
          <p className="connect_pg">155,073 travelers</p>
        </div>
        <div>
          <img className="carousel__img" src={ConnectImg} alt="" />
        </div>
        <div>
          <span className="connect__header">Domestic Flights</span>
          <h2 className="connect__hd_txt">Travel community</h2>
          <p className="connect_pg">155,073 travelers</p>
        </div>
      </div>
    </div>
  </Carousel>
);
export default ConnectCarousel;
