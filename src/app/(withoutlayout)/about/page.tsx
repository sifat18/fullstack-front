"use client";
import React from "react";
import HomePageLayout from "../layout";
import { Card, Col, Divider, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { CheckCircleOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import Image from "next/image";
import about from "../../../assets/about.jpg";
import { relative } from "path";
const About = () => {
  return (
    <Row align="middle" gutter={[16, 16]} style={{ margin: "2em 0" }}>
      <Col xs={24} md={12}>
        <Card>
          <Divider />
          <Typography>
            <Title
              style={{
                fontSize: "2rem",
                fontFamily: "Rasa,serif",
                color: "#21B7E2",
              }}
            >
              About Us
            </Title>
            <Paragraph
              style={{
                fontSize: "1rem",
                fontFamily: "Inter,sans-serif",
                fontWeight: "300",
              }}
            >
              Welcome to{" "}
              <strong style={{ fontFamily: "Grandstander,cursive" }}>
                [Daily Laundry]
              </strong>
              , your trusted partner for all your laundry needs. We understand
              that your time is precious, and we are here to make your life
              easier.
            </Paragraph>
            <Paragraph
              style={{
                fontSize: "1rem",
                fontFamily: "Inter,sans-serif",
                fontWeight: "300",
              }}
            >
              At{" "}
              <strong style={{ fontFamily: "Grandstander,cursive" }}>
                [Daily Laundry]
              </strong>
              , we are committed to providing you with top-quality laundry
              services that meet and exceed your expectations. Our dedicated
              team works tirelessly to ensure that your garments are treated
              with the utmost care and returned to you in pristine condition.
            </Paragraph>
            <Paragraph
              style={{
                fontSize: "1rem",
                fontFamily: "Inter,sans-serif",
                fontWeight: "300",
              }}
            >
              Our mission is simple: to simplify your life by taking the hassle
              out of laundry. Whether your are a busy professional, a parent on
              the go, or simply looking for more convenience, we have got you
              covered. We offer a wide range of services, including washing,
              drying, folding, and more.
            </Paragraph>
            <Paragraph
              style={{
                fontSize: "1rem",
                fontFamily: "Inter,sans-serif",
                fontWeight: "300",
              }}
            >
              Why choose us?
              <ul>
                <li>
                  <CheckCircleOutlined /> Expert Care: Our team consists of
                  laundry experts who understand the nuances of different
                  fabrics and clothing types.
                </li>
                <li>
                  <CheckCircleOutlined /> Quick Turnaround: We offer fast and
                  efficient service to get your laundry back to you when you
                  need it.
                </li>
                <li>
                  <CheckCircleOutlined /> Convenience: With easy scheduling and
                  delivery options, we aim to make laundry a hassle-free
                  experience for you.
                </li>
                <li>
                  <CheckCircleOutlined /> Quality Guarantee: We take pride in
                  our work, and your satisfaction is our top priority.
                </li>
              </ul>
            </Paragraph>
            <Paragraph
              style={{
                fontSize: "1rem",
                fontFamily: "Inter,sans-serif",
                fontWeight: "300",
              }}
            >
              We look forward to serving you and simplifying your laundry
              experience. Feel free to <strong>Contact Us</strong> for any
              inquiries or to schedule a pick-up.
            </Paragraph>
          </Typography>
        </Card>
      </Col>
      <Col
        xs={24}
        md={12}
        style={{
          position: "relative",
          width: "100%",
          // maxWidth: "700px",
          aspectRatio: "78/50",
          padding: "2rem auto",
        }}
      >
        <Image
          src={about}
          alt=""
          fill
          sizes="(max-width:768px) 100vw, 700px"
        ></Image>
      </Col>
    </Row>
  );
};
export default About;
