"use client";
import BreadCrumb from "@/components/BreadCrumb";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { serviceOptions } from "@/constants/role";
import { useCreateAdminMutation } from "@/redux/api/adminApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

function CreateAdmin() {
  const base = "super-admin";
  const [createAdmin] = useCreateAdminMutation();
  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      data.role = "admin";
      const res = await createAdmin(data).unwrap();
      if (res) {
        message.success("Admin created");
      } else {
        message.error("Something went wrong");
      }
    } catch (err: any) {
      message.error(err.message || "Something went wrong");
    }
  };
  return (
    <>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "create-admin", link: `/${base}/create-admin` },
        ]}
      />
      <h1>Create Admin</h1>
      <Form submitHandler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Admin information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput
                name="name.firstName"
                label="First name"
                size="large"
              />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput name="name.lastName" label="Last name" size="large" />
            </Col>
            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput name="email" label="Email" size="large" type="email" />
            </Col>
            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput
                name="phoneNumber"
                label="Contact"
                size="large"
                type="number"
              />
            </Col>
            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput name="Address" label="Address" size="large" />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput
                type="password"
                name="password"
                label="Password"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="service"
                label="Service"
                options={serviceOptions}
              />
            </Col>
          </Row>
        </div>

        <Button htmlType="submit">submit</Button>
      </Form>
    </>
  );
}

export default CreateAdmin;
