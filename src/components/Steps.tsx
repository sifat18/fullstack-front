import React from "react";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Meta from "antd/es/card/Meta";
import Title from "antd/es/typography/Title";
const Steps = () => {
  const data = [
    { step: "Step 1", name: "Pickup", img: step1 },
    { step: "Step 2", name: "Wash & Dry", img: step2 },
    { step: "Step 3", name: "Fold", img: step3 },
    { step: "Step 3", name: "Delivery", img: step4 },
  ];
  return (
    <div
      style={{
        background: "#D0F6FF",
        minHeight: "500px",
        // maxWidth: "100vw",
        paddingTop: "5em",
        paddingBottom: "5em",
        margin: "0.5em",
      }}
    >
      <p
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
      </h2>
      <Row align="middle" gutter={[16, 16]}>
        {data?.map((service, idx) => (
          <Col key={idx} xs={24} sm={12} md={6}>
            <Card
              style={{
                margin: "0 auto",
                maxWidth: "17rem",
                textAlign: "center",
              }}
              // title={

              // }
            >
              <>
                <p
                  style={{
                    color: "#21B7E2",
                    fontSize: "1rem",
                    fontFamily: "Grandstander,cursive",
                    fontWeight: "400",
                    textTransform: "uppercase",
                    wordWrap: "break-word",
                    textAlign: "center",
                    marginTop: "0.5em",
                  }}
                >
                  {service?.step}
                </p>
                <Title
                  style={{
                    color: "#263238",
                    fontSize: "1.8rem",
                    fontFamily: "Rasa, serif",
                    fontWeight: 500,
                    textAlign: "center",
                    marginTop: "0.3em",
                  }}
                  level={2}
                >
                  {service?.name}
                </Title>
              </>
              <Image
                src={service?.img}
                alt=""
                style={{
                  objectFit: "cover",
                  height: 200,
                  width: 220,
                  marginTop: "-1em",
                }}
              ></Image>{" "}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Steps;
