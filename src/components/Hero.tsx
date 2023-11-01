import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import laundry from "../assets/laundry2.png";

const Hero = () => {
  return (
    <div style={{ minHeight: "500px" }}>
      <Row align="middle">
        <Col
          xs={24}
          sm={24}
          md={12}
          className="hero"
          style={{ minHeight: "500px" }}
        >
          <p> 20% Discount for 1 Month Subscription</p>
          <h1>
            {" "}
            Laundry today or
            <br />
            Naked tomorrow.
          </h1>
          <p className="secondary">
            Daily Laundry service will wash, dry, and fold your laundry at an
            affordable price. Pickup and drop-off options available!
          </p>
          <div className="btn">How it works</div>
          <div className="tail">
            <p>
              18m+{" "}
              <span
                style={{
                  textAlign: "left",
                  float: "right",
                  margin: "0.5em 0.4em",
                }}
              >
                Happy <br />
                Customers
              </span>
            </p>
            <p>
              10+{" "}
              <span
                style={{
                  textAlign: "left",
                  float: "right",
                  margin: "0.5em 0.4em",
                }}
              >
                Years of <br />
                Experience
              </span>
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div style={{ maxHeight: "500px" }}>
            <Image src={laundry} alt="" className="imghero"></Image>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
