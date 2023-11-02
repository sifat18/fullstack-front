"use client";
import { Col, Divider, Row, Card } from "antd";
import Image from "next/image";
import review from "../assets/review2.jpg";
import test from "../assets/test.png";
import { useReviewsForAllQuery } from "@/redux/api/userApi";
import Title from "antd/es/typography/Title";

const { Meta } = Card;
export default function Review() {
  const { data } = useReviewsForAllQuery({});
  // const reviewStyle: React.CSSProperties = {
  //   width: "100%",
  //   height: "400px",
  //   border: "1px solid rgba(0,0,0,0.025)",
  //   backgroundColor: "rgba(0,0,0,0.025)",
  //   borderRadius: "1em",
  //   marginBottom: "2rem",
  // };

  const contentStyle: React.CSSProperties = {
    color: "#00334C",
    fontSize: "4rem",
    fontFamily: "Rasa,serif",
    fontWeight: "500",
    wordWrap: "break-word",
    textAlign: "center",
    margin: "0.4em 0",
    maxWidth: "100vw",
  };

  return (
    <div style={{ margin: "5em" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#21B7E2",
          fontSize: "1.2rem",
          fontFamily: "Grandstander, cursive",
          marginTop: "2em",
        }}
      >
        Reviews
      </h2>
      <h2 style={contentStyle}> Customer Feedback</h2>
      {/* <div style={reviewStyle}> */}
      <Row align="middle" gutter={[16, 16]} style={{ margin: "2em 0" }}>
        {data?.reviews?.map((item: any, idx) => (
          <Col key={idx} xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{ margin: "0 auto", maxWidth: "17rem" }}
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
                title={
                  <Title
                    style={{
                      fontFamily: "Grandstander, cursive",
                      fontSize: "1.2rem",
                      color: "#21B7E2",
                      textAlign: "left",
                    }}
                    level={2}
                  >
                    {item?.services?.name}
                  </Title>
                }
              />
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "#35353F",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                {item?.message}
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "#35353F",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                {" "}
                Review By -
                {item?.client?.name?.firstName +
                  " " +
                  item?.client?.name?.lastName}
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "#35353F",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Rating- {item?.rating}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    // </div>
  );
}
