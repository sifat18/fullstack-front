import Image from "next/image";
import React from "react";
import learn from "../assets/learn.png";
import { Button, Col, Row } from "antd";
import Link from "next/link";
const LearnMore = () => {
  return (
    <div className="learn">
      {/* <p
        style={{
          color: "#21B7E2",
          fontSize: "1.2rem",
          fontFamily: "Grandstander,cursive",
          fontWeight: "400",
          textAlign: "center",

          textTransform: "uppercase",
          wordWrap: "break-word",
        }}
      >
        How it works
      </p>
      <h2
        style={{
          color: "#263238",
          fontSize: "3rem",
          fontFamily: "Inter,sans-serif",
          fontWeight: "700",
          wordWrap: "break-word",
          textAlign: "center",
          margin: "1em 0",
        }}
      >
        Get it done in 4 steps
      </h2> */}
      <Row align="middle" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12}>
          <Image
            src={learn}
            alt=""
            style={{
              //   objectFit: "contain",
              height: 500,
              width: 500,
              margin: "-12em 5em 0 5em",
              // marginTop:
            }}
          ></Image>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          style={{
            marginTop: "2em",
          }}
        >
          <h2
            style={{
              color: "#263238",
              fontSize: "3rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              letterSpacing: "1.20px",
              wordWrap: "break-word",
              //   marginTop: "2em",
            }}
          >
            Hard time deciding what’s best for you?
          </h2>
          <div style={{ margin: "2em 10em" }}>
            <Link href={"/about"}>
              {" "}
              <Button
                style={{
                  padding: "0 5em",
                  height: "3rem",
                  fontFamily: "Rasa, serif",
                  fontSize: "1rem",
                }}
              >
                {" "}
                Learn More
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LearnMore;
