"use client";

import { Button, Card, Modal, message } from "antd";
import Image from "next/image";
import { Col, Divider, Row } from "antd";
import { useServicesQuery } from "@/redux/api/serviceApi";
import Pic from "../assets/Pic.png";
import { useState } from "react";
import Form from "./Forms/Form";
import FormInput from "./Forms/FormInput";
import FormTextArea from "./Forms/FormTextArea";
import { getUserInfo } from "@/helpers/authHelper";
import { IService } from "@/types/common";
import FormSelectField from "./Forms/FormSelectField";
import {
  useCreateOrderMutation,
  useCreateReviewMutation,
} from "@/redux/api/userApi";
import Title from "antd/es/typography/Title";
const { Meta } = Card;
const Service = () => {
  const { role, _id } = getUserInfo() as any;

  const contentStyle: React.CSSProperties = {
    color: "#00334C",
    fontSize: "4rem",
    fontFamily: "Rasa,serif",
    fontWeight: "500",
    wordWrap: "break-word",
    textAlign: "center",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState({});
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { data, isLoading } = useServicesQuery({});
  const [createReview] = useCreateReviewMutation();
  const [createOrder] = useCreateOrderMutation();
  const onSubmit = async (data: any) => {
    data.services = (singleData as any)?._id;
    data.client = _id;

    try {
      const res = await createReview(data).unwrap();
      if (res) {
        message.success("Service updated");
        setIsModalOpen(false);
      } else {
        message.error("Something went wrong");
      }
    } catch (err: any) {
      message.error(err.message || "Something went wrong");
    }
  };
  return (
    <div style={{ margin: "5em" }}>
      <Image src={""} alt="" style={{}}></Image>
      <h2
        style={{
          textAlign: "center",
          color: "#21B7E2",
          fontSize: "1.2rem",
          fontFamily: "Grandstander, cursive",
          marginTop: "2em",
        }}
      >
        Services
      </h2>
      <h2 style={contentStyle}>Services & Packages</h2>

      <Row align="middle" gutter={[16, 16]}>
        {data?.services
          ?.filter((item) => item?.status === "active")
          .map((service, idx) => (
            <Col key={idx} xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{ margin: "0 2em", maxWidth: "20rem" }}
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
                  title={
                    <Title
                      style={{
                        fontFamily: "Grandstander, cursive",
                        fontSize: "1.5rem",
                        color: "#21B7E2",
                      }}
                      level={2}
                    >
                      {service?.name}
                    </Title>
                  }
                  // description={service?.description?.slice(0, 50)}
                />
                {/* <p>{service?.name}</p> */}
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                    color: "#35353F",
                    fontWeight: "500",
                  }}
                >
                  {service?.description?.slice(0, 50)}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                    color: "#35353F",
                    margin: "1em 0",
                  }}
                >
                  First Come First Service, No early bookings. For Each Day you
                  have to book us to avail our services
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                    color: "#35353F",
                    margin: "1em 0",
                  }}
                >
                  Price- {service?.price}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                    color: "#35353F",
                    marginBottom: "1.2em",
                  }}
                >
                  Service- {service?.serviceType}
                </p>
                {role ? (
                  <>
                    <Button
                      className="extra"
                      // style={{ backgroundColor: "#00334C" }}
                      onClick={() => {
                        setSingleData(service);
                        setIsModalOpen(true);
                      }}
                    >
                      Review Us
                    </Button>
                    <Button
                      style={{ marginLeft: "2em" }}
                      type="primary"
                      className="extra"
                      onClick={() => {
                        // setIsModalOpen(true);
                        createOrder({
                          services: (service as any)?._id,
                          client: _id,
                          status: "pending",
                        }).then((res) => {
                          if ((res as any)?.data) {
                            message.success("Service Booked");
                          } else {
                            message.error("Something went wrong");
                          }
                        });
                      }}
                    >
                      Book Today
                    </Button>
                  </>
                ) : null}
              </Card>
            </Col>
          ))}
      </Row>
      <Modal
        title={
          <Title
            style={{
              fontFamily: "Grandstander, cursive",
              fontSize: "1rem",
              color: "#21B7E2",
            }}
            level={2}
          >
            Your Review
          </Title>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row
          justify={"center"}
          style={{
            minHeight: "25vh",
          }}
        >
          <h1
            style={{
              margin: "0.5em 0",
              fontFamily: "Rasa, serif",
              fontSize: "1.5rem",
              color: "#35353F",
            }}
          >
            Review {(singleData as IService)?.name} data
          </h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                  padding: "15px",
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    margin: "5px 0px",
                    fontFamily: "Inter, sans-serif",
                    color: "#35353F",
                  }}
                >
                  Service information
                </p>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="name"
                      label="Service name"
                      size="large"
                      value={(singleData as IService)?.name}
                      labelStyle={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.8rem",
                        color: "#35353F",
                      }}
                    />
                  </Col>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormSelectField
                      name="rating"
                      label="Rating"
                      labelStyle={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.8rem",
                        color: "#35353F",
                      }}
                      options={[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                        { value: "5", label: "5" },
                      ]}
                    />
                  </Col>

                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormTextArea
                      rows={3}
                      name="message"
                      label="Comment"
                      labelStyle={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.8rem",
                        color: "#35353F",
                      }}
                    />
                  </Col>
                </Row>
              </div>

              <div
                style={{
                  // marginTop: "3em",
                  // marginLeft: "2em",
                  margin: "3em 0 0 21em",
                }}
              >
                <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: "1em" }}
                >
                  Update
                </Button>
              </div>
            </Form>
          </div>
          {/* </Col> */}
        </Row>
      </Modal>
    </div>
  );
};
export default Service;
