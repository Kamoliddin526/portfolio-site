import React from "react";
import { Carousel } from "antd";
import DestiCarousel from "./images/DestiCarousel1.jpg";
import DestiCarousel2 from "./images/DestiCarousel2.jpg";
import DestiCarousel3 from "./images/DestiCarousel3.jpg";
import DestiCarousel4 from "./images/DestiCarousel4.jpg";

const CarouselDesti = () => (
  <Carousel autoplay>
    <div>
      <div className="carousel__images">
        <img className="carousel__img" src={DestiCarousel} alt="" />
        <h3 className="carousel__txt">Bali, Indonesia</h3>
        <img className="carousel__img" src={DestiCarousel2} alt="" />
        <h3 className="carousel__txt">Kerry, Ireland</h3>
        <img className="carousel__img" src={DestiCarousel3} alt="" />
        <h3 className="carousel__txt">Sydney, Australia</h3>
      </div>
    </div>
    <div>
      <div className="carousel__images">
        <img className="carousel__img" src={DestiCarousel2} alt="" />
        <h3 className="carousel__txt">Bali, Indonesia</h3>
        <img className="carousel__img" src={DestiCarousel} alt="" />
        <h3 className="carousel__txt">Kerry, Ireland</h3>
        <img className="carousel__img" src={DestiCarousel4} alt="" />
        <h3 className="carousel__txt">Sydney, Australia</h3>
      </div>
    </div>
    <div>
      <div className="carousel__images">
        <img className="carousel__img" src={DestiCarousel} alt="" />
        <h3 className="carousel__txt">Bali, Indonesia</h3>
        <img className="carousel__img" src={DestiCarousel3} alt="" />
        <h3 className="carousel__txt">Kerry, Ireland</h3>
        <img className="carousel__img" src={DestiCarousel4} alt="" />
        <h3 className="carousel__txt">Sydney, Australia</h3>
      </div>
    </div>
    <div>
      <div className="carousel__images">
        <img className="carousel__img" src={DestiCarousel3} alt="" />
        <h3 className="carousel__txt">Bali, Indonesia</h3>
        <img className="carousel__img" src={DestiCarousel2} alt="" />
        <h3 className="carousel__txt">Kerry, Ireland</h3>
        <img className="carousel__img" src={DestiCarousel} alt="" />
        <h3 className="carousel__txt">Sydney, Australia</h3>
      </div>
    </div>
  </Carousel>
);
export default CarouselDesti;
