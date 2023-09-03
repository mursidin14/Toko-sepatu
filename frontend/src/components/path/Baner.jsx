import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BanerJson from 'json/baner';

export default function SimpleSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
        <div className="container mt-5 mb-5 ml-auto baner">
            <Slider {...settings}>
                {
                    BanerJson.map((item, i) => (
                        <div className="img-container" key={i}>
                            <img className="w-100" src={`${item.img}`} alt={`${item.alt}`} />
                        </div>
                    ))
                }
            </Slider>
        </div>
  );
}