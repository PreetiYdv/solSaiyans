import React from 'react'
import Slider from "react-slick";
import team_img1 from "../assets/images/png/team_img1.png"
import team_img2 from "../assets/images/png/team_img2.png"
import team_img3 from "../assets/images/png/team_img3.png"
import team_img4 from "../assets/images/png/team_img4.png"
import team_wing from "../assets/images/png/teamWing.png";

function OurTeam() {
     var settings = {
       dots: false,
       infinite: true,
       speed: 1000,
       autoplay: true,
       arrows: false,
       slidesToShow: 4,
       slidesToScroll: 1,
       responsive: [
         {
           breakpoint: 1600,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 1,
           },
         },
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
           },
         },
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
           },
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
           },
         },
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
     };
  return (
    <>
      <section className=' position-relative pb-5'>
        <img src={team_wing} alt="" className="team_wing" />
        <div className="container myContainer">
          <h2 className=" fc_white ff_PoppinsBold fs_xl text-center pb-5">
            Our Team
          </h2>

          <Slider {...settings} className="super">
            <div className="px-3">
              <img src={team_img1} alt="team_img1" className="w-100 team_h" />
              <h3 className=" fc_white ff_PoppinsSemiBold fs_lg text-center pt-3">
                Member Name
              </h3>
              <p className=" fc_white ff_PoppinsRegular fs_sm text-center">
                Designation
              </p>
            </div>
            <div className="px-3">
              <img src={team_img2} alt="team_img2" className="w-100 team_h" />
              <h3 className=" fc_white ff_PoppinsSemiBold fs_lg text-center pt-3">
                Member Name
              </h3>
              <p className=" fc_white ff_PoppinsRegular fs_sm text-center">
                Designation
              </p>
            </div>
            <div className="px-3">
              <img src={team_img3} alt="team_img3" className="w-100 team_h" />
              <h3 className=" fc_white ff_PoppinsSemiBold fs_lg text-center pt-3">
                Member Name
              </h3>
              <p className=" fc_white ff_PoppinsRegular fs_sm text-center">
                Designation
              </p>
            </div>
            <div className="px-3">
              <img src={team_img4} alt="team_img4" className="w-100 team_h" />
              <h3 className=" fc_white ff_PoppinsSemiBold fs_lg text-center pt-3">
                Member Name
              </h3>
              <p className=" fc_white ff_PoppinsRegular fs_sm text-center">
                Designation
              </p>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default OurTeam