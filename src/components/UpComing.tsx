"use client";
import upcoming from "../assets/upcoming.png";

import { Card } from "antd";
import Image from "next/image";
import { Col, Divider, Row } from "antd";
import { useServicesQuery } from "@/redux/api/serviceApi";
const { Meta } = Card;
export default function UpComingService() {
  const { data, isLoading } = useServicesQuery({});

  const contentStyle: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    marginTop: "4rem",
    fontSize: "50px",
  };

  return (
    <div style={{ marginRight: "8px" }}>
      <h2 style={contentStyle}>UP Coming Service</h2>

      <Row align="middle" gutter={[16, 16]}>
        {data?.services
          ?.filter((item) => item?.status === "upcoming")
          .map((service, idx) => (
            <Col key={idx} xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{ margin: "0 2em" }}
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
                  title={service?.name}
                  description={service?.description?.slice(0.5)}
                />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
