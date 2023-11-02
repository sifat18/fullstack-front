"use client";
import upcoming from "../assets/upcoming.png";

import { Card } from "antd";
import Image from "next/image";
import { Col, Divider, Row } from "antd";
import { useServicesQuery } from "@/redux/api/serviceApi";
import Title from "antd/es/typography/Title";
const { Meta } = Card;
export default function UpComingService() {
  const { data, isLoading } = useServicesQuery({});

  const contentStyle: React.CSSProperties = {
    color: "#00334C",
    fontSize: "3rem",
    fontFamily: "Rasa,serif",
    fontWeight: "500",
    wordWrap: "break-word",
    textAlign: "center",
    margin: "0.4em 0",
    // width: "500px",
  };

  return (
    <div style={{ margin: "12em 0" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#21B7E2",
          fontSize: "1.2rem",
          fontFamily: "Grandstander, cursive",
          marginTop: "2em",
        }}
      >
        New Arrivals
      </h2>
      <h2 style={contentStyle}>Up Coming Services</h2>

      <Row align="middle" gutter={[16, 16]} style={{ margin: "0 2em" }}>
        {data?.services
          ?.filter((item) => item?.status === "upcoming")
          .map((service, idx) => (
            <Col
              key={idx}
              xs={24}
              sm={12}
              md={8}
              style={{ maxWidth: "20rem", margin: "0 auto" }}
            >
              <Card
                hoverable
                style={{ padding: "2em" }}
                cover={
                  <Image
                    src={upcoming}
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
                      {service?.name}
                    </Title>
                  }
                  // description={service?.description?.slice(0.5)}
                />
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.7rem",
                    color: "#35353F",
                    fontWeight: "500",
                    textAlign: "left",
                  }}
                >
                  {service?.description?.slice(0.5)}
                </p>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
