"use client";
import { getUserInfo } from "@/helpers/authHelper";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Title from "antd/es/typography/Title";
import React from "react";

const SkeletonLoader = () => {
  const { role, _id } = getUserInfo() as any;

  return (
    <Row className="demmo" align="middle" style={{ margin: "0 auto" }}>
      {[1, 2, 3].map((service, idx) => (
        <Col
          key={idx}
          xs={24}
          sm={12}
          md={8}
          style={{ maxWidth: "20rem", margin: "1em 3.5em" }}
        >
          <Card
            style={{
              width: "100%",
              height: "500px",
              padding: "-5rem",
              margin: "0",
            }}
          >
            <div
              className="skeleton"
              style={{
                width: "100%",
                height: "250px",
                marginBottom: "2em",
                // padding: "5em",
              }}
            ></div>
            <Meta
              title={
                <Title
                  style={{ margin: ".2em" }}
                  className="skeleton skeleton-text"
                ></Title>
              }
            />
            <p
              style={{ margin: "0.5em" }}
              className="skeleton skeleton-text"
            ></p>
            <p
              style={{ margin: "0.5em" }}
              className="skeleton skeleton-text"
            ></p>
            <p
              style={{ margin: "0.5em" }}
              className="skeleton skeleton-text"
            ></p>
            <p
              style={{ margin: "0.5em" }}
              className="skeleton skeleton-text"
            ></p>
            <p
              style={{ margin: "2em 0.5em " }}
              className="skeleton skeleton-info"
            ></p>
            <p
              style={{ margin: "2em 0.5em " }}
              className="skeleton skeleton-info"
            ></p>
            {role ? (
              <div style={{ display: "flex" }}>
                <div
                  className="skeleton"
                  style={{
                    width: "100px",
                    height: "30px",
                    margin: "0 0.8em",
                  }}
                ></div>
                <div
                  style={{
                    width: "100px",
                    height: "30px",
                    margin: "0 3em",
                  }}
                  className="skeleton"
                ></div>
              </div>
            ) : null}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SkeletonLoader;
