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
      <ActionBar title="My Profile">
        <Button
          style={{
            margin: "0px 5px",
          }}
          onClick={() => {
            setIsModalOpen(true);
          }}
          type="primary"
        >
          Edit Profile
        </Button>
      </ActionBar>
      <Card title="User Profile" style={{ width: "100%" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <UserOutlined />
            <Title level={4}>Name</Title>
            <p>{`${users?.name?.firstName} ${users?.name?.lastName}`}</p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <MailOutlined />
            <Title level={4}>Email</Title>
            <p>{users?.email}</p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <PhoneOutlined />
            <Title level={4}>Contact</Title>
            <p>{users?.phoneNumber}</p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <EnvironmentOutlined />
            <Title level={4}>Address</Title>
            <p>{users?.address}</p>
          </Col>
        </Row>
      </Card>
      <Modal
        title="Update User"
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
            Update {users?.name!?.firstName + users?.name?.lastName} data
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
                    fontSize: "18px",
                    fontWeight: "500",
                    margin: "5px 0px",
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
                    />
                  </Col>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="lastName"
                      label="Last Name "
                      size="large"
                      type="text"
                    />
                  </Col>
                  <Col span={12} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="phoneNumber"
                      label="Contact No"
                      size="large"
                      type="number"
                    />
                  </Col>
                  <Col span={12} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="email"
                      label="Email"
                      size="large"
                      type="email"
                    />
                  </Col>

                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormTextArea rows={3} name="address" label="address" />
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
};

export default GetProfile;
