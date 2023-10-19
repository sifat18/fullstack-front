"use client";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";
import dry from "../assets/dry.png";
import iron from "../assets/iron.png";
import wash from "../assets/wash.png";
import Image from "next/image";

const { Meta } = Card;
export default function Category() {
  const reviewStyle1: React.CSSProperties = {
    width: "100%",
    height: "400px",
    border: "1px solid #E9EAE0",
    backgroundColor: "#E9EAE0",
    borderRadius: "10px",
    marginBottom: "2rem",
  };
  const mainDiv1 = {
    paddingLeft: "5rem",
    paddingRight: "5rem",
  };

  const contentStyle1: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    marginTop: "4rem",
    fontSize: "50px",
    marginBottom: "4rem",
  };
  const rowStyle1 = {
    marginTop: "1rem",
    paddingLeft: "15rem",
    paddingRight: "5rem",
  };
  return (
    <>
      <h2 style={contentStyle1}>Our Categories</h2>
      <div style={mainDiv1}>
        <div style={reviewStyle1}>
          <Row align="middle" gutter={[16, 16]} style={{ margin: "2em 0" }}>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{}}
                cover={
                  <Image
                    src={dry}
                    alt=""
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      // width: 100,
                    }}
                  ></Image>
                }
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Dry Cleaning"
                  description="This is the description"
                />
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{}}
                cover={
                  <Image
                    src={iron}
                    alt=""
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      // width: 100,
                    }}
                  ></Image>
                }
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Iron and Fold"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{}}
                cover={
                  <Image
                    src={wash}
                    alt=""
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      // width: 100,
                    }}
                  ></Image>
                }
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Wash and Fold"
                  description="This is the description"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
