import React from "react";
import { Carousel } from "antd";
import OfferCarousel from "./images/OfferCarousel.jpg";
import OfferCarousel2 from "./images/OfferCarousel2.jpg";
import './OfferBar.scss'

const CarouselDesti = () => (
  <Carousel autoplay>
    <div>
      <div className="offer__carousel">
        <div>
          <img className="carousel__img" src={OfferCarousel} alt="" />
        </div>
        <div>
          <span className="offer__header">Domestic Flights</span>
          <h2 className="offer__hd_txt">Huge savings on flight with trxvl.</h2>
          <p className="offer_pg">Book domestic flights starting @ just ₹1459</p>
          <button className="offer__btn">Book now</button>
        </div>
        <div>
          <img className="carousel__img" src={OfferCarousel2} alt="" />
        </div>
        <div>
          <span className="offer__header">Domestic Flights</span>
          <h2 className="offer__hd_txt">Huge savings on flight with trxvl.</h2>
          <p className="offer_pg">Book domestic flights starting @ just ₹1459</p>
          <button className="offer__btn">Book now</button>
        </div>
      </div>
    </div>
    <div>
      <div className="offer__carousel">
        <div>
          <img className="carousel__img" src={OfferCarousel2} alt="" />
        </div>
        <div>
          <span className="offer__header">International Hotels</span>
          <h2 className="offer__header">Enjoy upto 20% off on International Hotels</h2>
          <p className="offer_pg">Make the most of  this deal on your first booking with trxvl.</p>
          <button className="offer__btn">Book now</button>
        </div>
        <div>
          <img className="carousel__img" src={OfferCarousel} alt="" />
        </div>
        <div>
          <span className="offer__header">Domestic Flights</span>
          <h2 className="offer__hd_txt">Huge savings on flight with trxvl.</h2>
          <p className="offer_pg">Book domestic flights starting @ just ₹1459</p>
          <button className="offer__btn">Book now</button>
        </div>
      </div>
    </div>
  </Carousel>
);
export default CarouselDesti;
