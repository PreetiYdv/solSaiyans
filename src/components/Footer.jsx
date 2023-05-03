import React from "react";
import logo from "../assets/images/svg/logo.svg";
import twitter from "../assets/images/svg/twitter.svg";
import discord from "../assets/images/svg/discord.svg";

function Footer() {
  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center py-5">
        <img src={logo} alt="" className="mw_300 w-100" />
        <div className="d-flex pt-5 gap-5">
          <a href="#">
            <img src={twitter} alt="twitter" className="footer_icon" />
          </a>
          <a href="">
            <img src={discord} alt="discord" className="footer_icon" />
          </a>
        </div>
        <div className="d-flex gap-4">
          <p className="fc_grey ff_PoppinsRegular fs_sm pt-4">Privacy Policy</p>
          <p className="fc_grey ff_PoppinsRegular fs_sm pt-4">Terms</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
