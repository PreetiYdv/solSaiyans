import React from "react";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "./Button";
import hero_img from "../assets/images/png/head_img1.png";
import hero_img2 from "../assets/images/png/head_img2.png";
import hero_img3 from "../assets/images/png/head_img3.png";
import hero_img4 from "../assets/images/png/head_img4.png";
import hero_img5 from "../assets/images/png/head_img5.png";
import hero_img6 from "../assets/images/png/head_img6.png";
import header_img from "../assets/images/png/header.png";

function Header() {
    var settings = {
      dots: false,
      infinite: true,
      fade: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 2000,
      pauseOnHover: false,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
    <>
      <div className="container myContainer py-5">
        <Row>
          <Col lg={6}>
            <h2 className=" fc_white ff_PoppinsBold fs_xxl pb-4 pt-5 z-2 position-relative">
              Non ut <span className=" fc_red">aliquet lacus</span> arcu aryuv
              testwf.
            </h2>
            <p className=" fc_grey ff_PoppinsRegular fs_md pt-2 pb-5 z-2 position-relative">
              At suspendisse tellus at pretium arcu turpis. Enim convallis sed
              tortor faucibus amet ipsum at lacus ultrices. Donec nibh viverra
              odio convallis.
            </p>
            <div className="d-flex gap-4 z-2 position-relative">
              <Button title="Mint Now" />
              <button className=" border-0 bg-transparent fc_white fs_md">
                Learn more
              </button>
            </div>
          </Col>
          <Col lg={6} className=" position-relative">
            <img src={header_img} alt="" className="w-100 z_0 header_img" />
            <Slider {...settings}>
              <img src={hero_img} alt="" className=" w-100" />
              <img src={hero_img2} alt="" className=" w-100" />
              <img src={hero_img3} alt="" className=" w-100" />
              <img src={hero_img4} alt="" className=" w-100" />
              <img src={hero_img5} alt="" className=" w-100" />
              <img src={hero_img6} alt="" className=" w-100" />
            </Slider>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Header;
