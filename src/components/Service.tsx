"use client";

import { Card } from "antd";
import Image from "next/image";
import { Col, Divider, Row } from "antd";
import { useServicesQuery } from "@/redux/api/serviceApi";
import Pic from "../assets/Pic.png";
const { Meta } = Card;
export default function Service() {
  const contentStyle: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "50px",
  };

  const rowStyle = {
    marginTop: "4rem",
    paddingLeft: "15rem",
    paddingRight: "5rem",
    marginBottom: "4rem",
  };
  const { data, isLoading } = useServicesQuery({});

  return (
    <div>
      <Image
        src={""}
        alt=""
        style={{ marginLeft: "48rem", marginTop: "3rem" }}
      ></Image>
      <h2 style={contentStyle}>Available Service</h2>

      <Row align="middle" gutter={[16, 16]}>
        {data?.services
          ?.filter((item) => item?.status === "active")
          .map((service, idx) => (
            <Col key={idx} xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{ margin: "0 2em" }}
                cover={
                  <Image
                    src={Pic}
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
                  title={service?.name}
                  description={service?.description?.slice(0, 50)}
                />
                <p>Price- {service?.price}</p>
                <p>Service- {service?.serviceType}</p>
              </Card>
            </Col>
          ))}

        {/* 
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>

        <Col span={6}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col> */}
      </Row>
    </div>
  );
}
