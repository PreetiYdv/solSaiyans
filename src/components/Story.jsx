import React from "react";
import Slider from "react-slick";
import { Col, Row } from "react-bootstrap";
import img1 from "../assets/images/png/hero_img6.png";
import img2 from "../assets/images/png/hero_img2.png";
import img3 from "../assets/images/png/hero_img3.png";
import img4 from "../assets/images/png/hero_img4.png";
import img5 from "../assets/images/png/hero_img5.png";
import story_wing from "../assets/images/png/pngwing.png";
import Button from "./Button";

function Story() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    centerMode: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          centerMode: true,
          centerPadding: "60px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "60px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "60px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container myContainer translate-middle-y">
        <div className="story_box position-relative z-2">
          <h3 className=" fc_white ff_PoppinsBold fs_xl pb-4"> The Story</h3>
          <Row className=" justify-content-between">
            <Col md={6}>
              <p className=" fc_white ff_PoppinsRegular fs_sm">
                {" "}
                Neque cras adipiscing id id eu. Nisl leo donec mattis leo
                consectetur at nunc id. Nulla pharetra dolor sit quis donec
                tristique proin. Nulla quis magna tristique nisi eu at morbi.
                Malesuada lorem commodo ultrices morbi magna dictum congue nec.
              </p>
            </Col>
            <Col md={6}>
              <p className=" fc_white ff_PoppinsRegular fs_sm">
                {" "}
                Neque cras adipiscing id id eu. Nisl leo donec mattis leo
                consectetur at nunc id. Nulla pharetra dolor sit quis donec
                tristique proin. Nulla quis magna tristique nisi eu at morbi.
                Malesuada lorem commodo ultrices morbi magna dictum congue nec.
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <section className=" position-relative">
        <img src={story_wing} alt="" className="story_wing" />
        <div className="layer"></div>
        <div className="layer2"></div>
        <Slider {...settings} className="super">
          <div className=" px-4">
            <img src={img1} alt="" className=" w-100" />
            <h2 className=" fc_white ff_PoppinsSemiBold fs_lg text-center pt-4">
              Super SolaSaiyan
            </h2>
            <p className="d-none fc_white ff_PoppinsRegular fs_sm text-center pb-4">
              457/500 0.04 ETH
            </p>
          </div>
          <div className=" px-4">
            <img src={img2} alt="" className=" w-100" />
            <h2 className=" fc_white ff_PoppinsSemiBold fs_lg text-center pt-4">
              Super SolaSaiyan
            </h2>
            <p className="d-none fc_white ff_PoppinsRegular fs_sm text-center pb-4">
              457/500 0.04 ETH
            </p>
          </div>
          <div className=" px-4">
            <img src={img3} alt="" className=" w-100" />
            <h2 className=" fc_white ff_PoppinsSemiBold fs_lg text-center pt-4">
              Super SolaSaiyan
            </h2>
            <p className="d-none fc_white ff_PoppinsRegular fs_sm text-center pb-4">
              457/500 0.04 ETH
            </p>
          </div>
          <div className=" px-4">
            <img src={img4} alt="" className=" w-100" />
            <h2 className=" fc_white ff_PoppinsSemiBold fs_lg text-center pt-4">
              Super SolaSaiyan
            </h2>
            <p className="d-none fc_white ff_PoppinsRegular fs_sm text-center pb-4">
              457/500 0.04 ETH
            </p>
          </div>
          <div className=" px-4">
            <img src={img5} alt="" className=" w-100" />
            <h2 className=" fc_white ff_PoppinsSemiBold fs_lg text-center pt-4">
              Super SolaSaiyan
            </h2>
            <p className="d-none fc_white ff_PoppinsRegular fs_sm text-center pb-4">
              457/500 0.04 ETH
            </p>
          </div>
          <div className=" px-4">
            <img src={img3} alt="" className=" w-100" />
            <h2 className=" fc_white ff_PoppinsSemiBold fs_lg text-center pt-4">
              Super SolaSaiyan
            </h2>
            <p className="d-none fc_white ff_PoppinsRegular fs_sm text-center pb-4">
              457/500 0.04 ETH
            </p>
          </div>
        </Slider>
        <div className=" d-flex flex-column justify-content-center align-items-center pt-4">
          <Button title="Mint Now" />
        </div>
      </section>
    </>
  );
}

export default Story;
