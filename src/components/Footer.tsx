"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-image">
        <img src="your-image-url.jpg" alt="Footer Image" />
      </div>
      <div className="footer-info">
        <div className="footer-info-column">
          <h4>Column 1</h4>
          <p>test1</p>
          <p>test2</p>
        </div>
        <div className="footer-info-column">
          <h4>Column 2</h4>
          <p>test1</p>
          <p>test2</p>
        </div>
        <div className="footer-info-column">
          <h4>Column 3</h4>
          <p>test1</p>
          <p>test2</p>
        </div>
        <div className="footer-info-column">
          <h4>Column 4</h4>
          <p>test1</p>
          <p>test2</p>
        </div>
      </div>
      <div className="footer-social">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
