import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Link to="/shop">
        <Slider {...settings}>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <img src={Logo} alt="logo" />
          </div>
        </Slider>
      </Link>
    </>
  );
};

export default Banner;
