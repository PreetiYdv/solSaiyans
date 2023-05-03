import React, { useState } from "react";
import logo from "../assets/images/svg/logo.svg"
import { TiThMenuOutline } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import Button from "./Button";

export const SolNavBar = () => {
      const [toggle, setToggle] = useState(false);

      const shownavBar = () => {
        setToggle(!toggle);
        document.body.classList.toggle("overflow-hidden");
      };
  return (
    <div>
      <nav>
        <div className="container myContainer d-flex justify-content-between align-items-center py-4">
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <div>
            <ul
              className={
                toggle
                  ? "showNav px-0 myNav"
                  : "d-flex gap-5 mb-0 px-0 align-items-center myNav"
              }
            >
              <li>
                <a
                  onClick={shownavBar}
                  href="#LetsFly"
                  className="ff_PoppinsRegular fs_sm fc_white text-decoration-none"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={shownavBar}
                  href=""
                  className="ff_PoppinsRegular fs_sm fc_white text-decoration-none"
                >
                  Fighter
                </a>
              </li>
              <li>
                <a
                  onClick={shownavBar}
                  href=""
                  className="ff_PoppinsRegular fs_sm fc_white text-decoration-none"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  onClick={shownavBar}
                  href=""
                  className="ff_PoppinsRegular fs_sm fc_white text-decoration-none"
                >
                  Team
                </a>
              </li>
              <li>
                <Button title="Connect Wallet" />
              </li>
            </ul>
          </div>
          <span onClick={shownavBar} className="nav_btn d-lg-none z-index-50">
            {toggle ? (
              <GrClose className="stroke_white" />
            ) : (
              <TiThMenuOutline className="fc_white" />
            )}
          </span>
        </div>
      </nav>
    </div>
  );
};
