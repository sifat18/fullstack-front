import React from "react";
import dry from "../assets/dry.png";
import iron from "../assets/iron.png";
import wash from "../assets/wash.png";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Meta from "antd/es/card/Meta";
import Title from "antd/es/typography/Title";
const Category = () => {
  const data = [
    { name: "Dry Cleaning", img: dry },
    { name: "Iron and Fold", img: iron },
    { name: "Wash and Fold", img: wash },
  ];
  return (
    <div
      style={{
        // maxWidth: "100vw",
        // paddingTop: "5em",
        // paddingBottom: "5em",
        margin: "15em 0",
      }}
    >
      <p
        style={{
          color: "#21B7E2",
          fontSize: "1.2rem",
          fontFamily: "Grandstander,cursive",
          fontWeight: "600",
          textAlign: "center",

          textTransform: "uppercase",
          wordWrap: "break-word",
        }}
      >
        Explore
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
        Our Services For You
      </h2>
      <Row align="middle" gutter={[16, 16]} style={{ margin: "0 2em" }}>
        {data?.map((service, idx) => (
          <Col
            key={idx}
            xs={24}
            sm={12}
            md={8}
            style={{ maxWidth: "20rem", margin: "0 auto" }}
          >
            <Card
              hoverable
              style={
                {
                  // margin: "0 auto",
                }
              }
              // title={

              // }
            >
              <>
                <Title
                  style={{
                    color: "#263238",
                    fontSize: "1.8rem",
                    fontFamily: "Rasa, serif",
                    fontWeight: 500,
                    textAlign: "center",
                    margin: "0.5em 0",
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
                  height: 250,
                  width: 250,
                  marginTop: "1em",
                }}
              ></Image>{" "}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;
