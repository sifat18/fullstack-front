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
const { Meta } = Card;
export default function Service() {
  const { role, _id } = getUserInfo() as any;

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
                <p>
                  First Come First Service, No early bookings. For Each Day you
                  have to book us to avail our services
                </p>
                <p>Price- {service?.price}</p>
                <p style={{ marginBottom: "1em" }}>
                  Service- {service?.serviceType}
                </p>
                <Button
                  type="primary"
                  onClick={() => {
                    setSingleData(service);
                    setIsModalOpen(true);
                  }}
                >
                  Review US
                </Button>
                <Button
                  style={{ marginLeft: "2em" }}
                  type="primary"
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
              </Card>
            </Col>
          ))}
      </Row>
      <Modal
        title="Update Service"
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
              margin: "15px 0px",
            }}
          >
            Update {(singleData as IService)?.name} data
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
                    fontSize: "18px",
                    fontWeight: "500",
                    margin: "5px 0px",
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
                    />
                  </Col>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormSelectField
                      name="rating"
                      label="Rating"
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
                    <FormTextArea rows={3} name="message" label="Comment" />
                  </Col>
                </Row>
              </div>

              <div
                style={{
                  marginTop: "3em",
                  marginLeft: "2em",
                }}
              >
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
                <Button
                  type="primary"
                  style={{ marginLeft: "1em" }}
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
          {/* </Col> */}
        </Row>
      </Modal>
    </div>
  );
}
