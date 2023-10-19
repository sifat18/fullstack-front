"use client";
import { Col, Divider, Row, Card } from "antd";
import Image from "next/image";
import review from "../assets/review2.jpg";
import test from "../assets/test.png";

const { Meta } = Card;
export default function Review() {
  const reviewStyle: React.CSSProperties = {
    width: "100%",
    height: "400px",
    border: "1px solid rgba(0,0,0,0.025)",
    backgroundColor: "rgba(0,0,0,0.025)",
    borderRadius: "1em",
    marginBottom: "2rem",
  };
  const mainDiv = {
    paddingLeft: "5rem",
    paddingRight: "5rem",
  };

  const contentStyle: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "50px",
    marginBottom: "4rem",
  };
  const rowStyle = {
    marginTop: "1rem",
    paddingLeft: "15rem",
    paddingRight: "5rem",
  };
  return (
    <div style={mainDiv}>
      <Image
        src={review}
        alt=""
        style={{ marginLeft: "33rem", marginTop: "3rem" }}
      ></Image>
      <h2 style={contentStyle}>User Review</h2>
      <div style={reviewStyle}>
        <Row align="middle" gutter={[16, 16]} style={{ margin: "2em 0" }}>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{ margin: "0 2em" }}
              cover={
                <Image
                  src={test}
                  alt=""
                  style={{
                    objectFit: "cover",
                    height: "200px",
                    // width: 100,
                  }}
                ></Image>
              }
            >
              {" "}
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
