import React from "react";
import { Carousel } from "antd";
import BrowseImg from "./images/BrowseImg.jpg";
import BrowseImg2 from "./images/BrowseImg2.jpg";
import BrowseImg3 from "./images/BrowseImg3.jpg";
import BrowseImg4 from "./images/BrowseImg4.jpg";

const BrowseCarousel = () => (
  <Carousel autoplay>
    <div>
      <div className="carousel__images">
        <img className="carousel__img" src={BrowseImg} alt="" />
        <h3 className="carousel__txt">Bali, Indonesia</h3>
        <img className="carousel__img" src={BrowseImg2} alt="" />
        <h3 className="carousel__txt">Kerry, Ireland</h3>
        <img className="carousel__img" src={BrowseImg3} alt="" />
        <h3 className="carousel__txt">Sydney, Australia</h3>
      </div>
    </div>
    <div>
      <div className="carousel__images">
        <img className="carousel__img" src={BrowseImg2} alt="" />
        <h3 className="carousel__txt">Bali, Indonesia</h3>
        <img className="carousel__img" src={BrowseImg} alt="" />
        <h3 className="carousel__txt">Kerry, Ireland</h3>
        <img className="carousel__img" src={BrowseImg4} alt="" />
        <h3 className="carousel__txt">Sydney, Australia</h3>
      </div>
    </div>
    <div>
      <div className="carousel__images">
        <img className="carousel__img" src={BrowseImg} alt="" />
        <h3 className="carousel__txt">Bali, Indonesia</h3>
        <img className="carousel__img" src={BrowseImg3} alt="" />
        <h3 className="carousel__txt">Kerry, Ireland</h3>
        <img className="carousel__img" src={BrowseImg4} alt="" />
        <h3 className="carousel__txt">Sydney, Australia</h3>
      </div>
    </div>
    <div>
      <div className="carousel__images">
        <img className="carousel__img" src={BrowseImg3} alt="" />
        <h3 className="carousel__txt">Bali, Indonesia</h3>
        <img className="carousel__img" src={BrowseImg2} alt="" />
        <h3 className="carousel__txt">Kerry, Ireland</h3>
        <img className="carousel__img" src={BrowseImg} alt="" />
        <h3 className="carousel__txt">Sydney, Australia</h3>
      </div>
    </div>
  </Carousel>
);
export default BrowseCarousel;
