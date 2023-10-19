"use client";
import React from "react";
import HomePageLayout from "../(withoutlayout)/layout";
import { Card, Col, Divider, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { CheckCircleOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import Image from "next/image";
import about from "../../assets/about.jpg";
const About = () => {
  return (
    <HomePageLayout>
      <Row align="middle" gutter={[16, 16]} style={{ margin: "2em 0" }}>
        <Col xs={24} md={12}>
          <Card style={{}}>
            <Divider />
            <Typography>
              <Title>About Us</Title>
              <Paragraph>
                Welcome to <strong>[Your Laundry Service Name]</strong>, your
                trusted partner for all your laundry needs. We understand that
                your time is precious, and we are here to make your life easier.
              </Paragraph>
              <Paragraph>
                At <strong>[Your Laundry Service Name]</strong>, we are
                committed to providing you with top-quality laundry services
                that meet and exceed your expectations. Our dedicated team works
                tirelessly to ensure that your garments are treated with the
                utmost care and returned to you in pristine condition.
              </Paragraph>
              <Paragraph>
                Our mission is simple: to simplify your life by taking the
                hassle out of laundry. Whether your are a busy professional, a
                parent on the go, or simply looking for more convenience, we
                have got you covered. We offer a wide range of services,
                including washing, drying, folding, and more.
              </Paragraph>
              <Paragraph>
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
                    <CheckCircleOutlined /> Convenience: With easy scheduling
                    and delivery options, we aim to make laundry a hassle-free
                    experience for you.
                  </li>
                  <li>
                    <CheckCircleOutlined /> Quality Guarantee: We take pride in
                    our work, and your satisfaction is our top priority.
                  </li>
                </ul>
              </Paragraph>
              <Paragraph>
                We look forward to serving you and simplifying your laundry
                experience. Feel free to <strong>Contact Us</strong> for any
                inquiries or to schedule a pick-up.
              </Paragraph>
            </Typography>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Image
            src={about}
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
            }}
          ></Image>
        </Col>
      </Row>
    </HomePageLayout>
  );
};
export default dynamic(() => Promise.resolve(About), { ssr: false });
