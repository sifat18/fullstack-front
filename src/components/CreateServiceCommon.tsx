"use client";
import { useCreateServiceMutation } from "@/redux/api/serviceApi";
import { Button, Col, Row, message } from "antd";
import React from "react";
import Form from "./Forms/Form";
import FormInput from "./Forms/FormInput";
import FormSelectField from "./Forms/FormSelectField";
import { serviceTypeOptions, statusOptions } from "@/constants/role";
import FormTextArea from "./Forms/FormTextArea";

function CreateServiceCommon() {
  const [createService] = useCreateServiceMutation();

  const onSubmit = async (data: any) => {
    data.price = parseInt(data.price);
    data.slots = parseInt(data.slots);
    try {
      const res = await createService(data).unwrap();
      if (res) {
        message.success("Service created");
      } else {
        message.error("Something went wrong");
      }
    } catch (err: any) {
      message.error(err.message || "Something went wrong");
    }
  };
  return (
    <>
      <h1>Create Service</h1>
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
            Service information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput name="name" label="Service name" size="large" />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="price"
                label="Price"
                size="large"
                type="number"
              />
            </Col>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="slots"
                label="Slots Per day"
                size="large"
                type={"number"}
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="serviceType"
                label="Service Type"
                options={serviceTypeOptions}
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="status"
                label="Status"
                options={statusOptions}
              />
            </Col>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormTextArea rows={3} name="description" label="description" />
            </Col>
          </Row>
        </div>

        <Button htmlType="submit">submit</Button>
      </Form>
    </>
  );
}

export default CreateServiceCommon;
