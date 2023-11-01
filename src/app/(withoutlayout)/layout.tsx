"use client";
import { Col, Layout, Row } from "antd";
import Image from "next/image";

import foot from "../../assets/foot.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import HeaderPage from "@/components/HeaderPage";
import Footer from "@/components/Footer";

const { Content } = Layout;

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderPage />
      <div style={{ height: "" }}>{children}</div>
      {/* <Footer style={footerStyle}>
        <Row gutter={20}>
          <Col>
            <Image src={foot} alt="" width={160} height={160}></Image>
          </Col>
          <Col>
            <ul style={list}>
              <li style={list1}>About us</li>
              <li style={list1}>Contact Us</li>
              <li style={list1}>Photograpy</li>
              <li style={list1}>More</li>
            </ul>
          </Col>

          <Col>
            <ul style={list}>
              <li style={list1}>Events</li>
              <li style={list1}>Reviews</li>
              <li style={list1}>Discount</li>
              <li style={list1}>Story</li>
            </ul>
          </Col>
        </Row>

        <div style={{ marginLeft: "12rem" }}>
          <FacebookOutlined style={icon1} />
          <InstagramOutlined style={icon1} />
          <TwitterOutlined style={icon1} />
        </div>
      </Footer> */}
      <Footer />
    </>
  );
};

export default HomePageLayout;
