"use client";
import Image from "next/image";
import React from "react";
import logo from "../assets/Bubbles (1).png";
import logo2 from "../assets/Bubbles.png";
import {
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-image">
        {/* <div className="logo"> */}
        <Image
          src={logo}
          alt=""
          style={{
            transform: "rotate(275.64deg)",
          }}
        ></Image>
        <Image
          src={logo2}
          alt=""
          style={{
            display: "inline-block",
            margin: "-1.7em 0.1em 2em -2em",
            float: "right",
            transform: "rotate(99.64deg)",
          }}
        ></Image>
        Daily laundry
      </div>
      {/* </div> */}
      <div className="footer-info">
        <div className="footer-info-column">
          <h4>About us</h4>
          <p>About us</p>
          <p>Creators</p>
          <p>Philosophy</p>
        </div>

        <div className="footer-info-column">
          <h4>Company</h4>
          <p>Our team</p>
          <p>Terms</p>
          <p>How it works</p>
        </div>
        <div className="footer-info-column">
          <h4>Services</h4>
          <p>Pickup</p>
          <p>Laundry</p>
        </div>
      </div>
      <div className="footer-social">
        <div
          style={{
            textAlign: "center",
            paddingBottom: "1em",
            color: "#263238",
            fontSize: "1rem",
            fontFamily: "Inter,sans-serif",
            fontWeight: 500,
          }}
        >
          Check Us Out
        </div>
        <a href="#">
          <FacebookFilled />
        </a>
        <a href="#">
          <TwitterCircleFilled />
        </a>
        <a href="#">
          <InstagramFilled />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
