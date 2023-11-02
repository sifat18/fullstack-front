"use client";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import { Button, Card, Col, Input, Modal, Row, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import { useDebounced } from "@/redux/hooks";
import {
  useDeleteServiceMutation,
  useServicesQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import AnTable from "@/components/AnTable";
import ActionBar from "@/components/Forms/ActionBar";
import { getUserInfo } from "@/helpers/authHelper";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import { serviceTypeOptions, statusOptions } from "@/constants/role";
import { useClientsQuery } from "@/redux/api/adminApi";
import { useUpdateUserMutation, useUserQuery } from "@/redux/api/userApi";
import Title from "antd/es/typography/Title";

const GetProfile = () => {
  const [updateUser] = useUpdateUserMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useUserQuery({});

  const users = data?.profile;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data: any) => {
    const payload = {
      name: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      phoneNumber: data.phoneNumber,
      email: data.email,
      address: data.address,
    };
    try {
      const res = await updateUser(payload).unwrap();

      if (res) {
        message.success("User updated");
        setIsModalOpen(false);
      } else {
        message.error("Something went wrong");
      }
    } catch (err: any) {
      message.error(err.message || "Something went wrong");
    }
  };
  const defaultValues = {
    firstName: users?.name?.firstName,
    lastName: users?.name?.lastName,
    phoneNumber: users?.phoneNumber,
    email: users?.email,
    address: users?.address,
    id: (users as any)?._id,
  };
  return (
    <div>
      <ActionBar title={"My Profile"}>
        <Button
          style={{
            margin: "0px 5px",
            fontFamily: "Rasa, serif",
            fontSize: "1rem",
          }}
          onClick={() => {
            setIsModalOpen(true);
          }}
          type="primary"
        >
          Edit Profile
        </Button>
      </ActionBar>
      <Card
        title={
          <Title
            style={{
              fontFamily: "Grandstander, cursive",
              fontSize: "1.2rem",
              color: "#21B7E2",
              margin: "0.5em 0",
            }}
            level={2}
          >
            {" "}
            Profile
          </Title>
        }
        // style={{ width: "100%" }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <UserOutlined
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1.5rem",
                color: "#35353F",
              }}
            />
            <Title
              level={4}
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1.2rem",
                color: "#35353F",
              }}
            >
              Name
            </Title>
            <p
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1rem",
                color: "#35353F",
              }}
            >{`${users?.name?.firstName} ${users?.name?.lastName}`}</p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <MailOutlined
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1.5rem",
                color: "#35353F",
              }}
            />
            <Title
              level={4}
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1.2rem",
                color: "#35353F",
              }}
            >
              Email
            </Title>
            <p
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1rem",
                color: "#35353F",
              }}
            >
              {users?.email}
            </p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <PhoneOutlined
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1.5rem",
                color: "#35353F",
              }}
            />
            <Title
              level={4}
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1.2rem",
                color: "#35353F",
              }}
            >
              Contact
            </Title>
            <p
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1rem",
                color: "#35353F",
              }}
            >
              {users?.phoneNumber}
            </p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <EnvironmentOutlined
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1.5rem",
                color: "#35353F",
              }}
            />
            <Title
              level={4}
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1.2rem",
                color: "#35353F",
              }}
            >
              Address
            </Title>
            <p
              style={{
                margin: "0.5em 0",
                fontFamily: "Rasa, serif",
                fontSize: "1rem",
                color: "#35353F",
              }}
            >
              {users?.address}
            </p>
          </Col>
        </Row>
      </Card>
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
            {" "}
            Edit Information
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
            Update {users?.name!?.firstName + " " + users?.name?.lastName} data
          </h1>
          <div>
            <Form defaultValues={defaultValues} submitHandler={onSubmit}>
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
                  Users information
                </p>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="firstName"
                      label="First Name"
                      size="large"
                      type="text"
                      labelStyle={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.8rem",
                        color: "#35353F",
                      }}
                    />
                  </Col>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="lastName"
                      label="Last Name "
                      size="large"
                      type="text"
                      labelStyle={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.8rem",
                        color: "#35353F",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="phoneNumber"
                      label="Contact No"
                      size="large"
                      type="number"
                      labelStyle={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.8rem",
                        color: "#35353F",
                      }}
                    />
                  </Col>
                  <Col span={12} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="email"
                      label="Email"
                      size="large"
                      type="email"
                      labelStyle={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.8rem",
                        color: "#35353F",
                      }}
                    />
                  </Col>

                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormTextArea
                      rows={3}
                      name="address"
                      label="Address"
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
                  margin: "3em 0 0 21em",
                }}
              >
                <Button
                  style={{
                    fontFamily: "Rasa, serif",
                    fontSize: "1rem",
                  }}
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    marginLeft: "1em",
                    fontFamily: "Rasa, serif",
                    fontSize: "1rem",
                  }}
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

export default GetProfile;
