"use client";
import { Button, Card, Col, Input, Row, message } from "antd";
import register from "../assets/register.png";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { registerSchema } from "@/schemas/login";
import Form from "./Forms/Form";
import FormInput from "./Forms/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { storeUserInfo } from "@/helpers/authHelper";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  UserAddOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useCreateUserMutation } from "@/redux/api/userApi";
import Title from "antd/es/typography/Title";
type FormValues = {
  email: string;
  password: string;
};

const RegisterPage = () => {
  const [userCreate] = useCreateUserMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    data.role = "client";
    try {
      const res = await userCreate(data);
      if (res) {
        router.push("/login");
        message.success("User registered  successfully!");
        setTimeout(() => {
          message.info("Please now Login to your account!");
        }, 2000);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={register} width={500} alt="Register image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
            fontFamily: "Inter, sans-serif",
            fontSize: "1.2rem",
            textAlign: "center",
          }}
        >
          First Register your account
        </h1>
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
          <Col>
            <Card
              title={
                <Title
                  style={{
                    fontFamily: "Grandstander, cursive",
                    fontSize: "1rem",
                    // color: "#21B7E2",
                  }}
                  level={2}
                >
                  Create your account
                </Title>
              }
            >
              <Form
                submitHandler={onSubmit}
                resolver={yupResolver(registerSchema)}
              >
                <UserAddOutlined />{" "}
                <FormInput
                  name="name.firstName"
                  type="text"
                  size="large"
                  label="First Name"
                  required
                  style={{ marginTop: "0.5em", marginBottom: "1em" }}
                  labelStyle={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "#35353F",
                  }}
                />
                <UserOutlined />
                <FormInput
                  name="name.lastName"
                  type="text"
                  size="large"
                  label="Last Name"
                  required
                  style={{ marginBottom: "1em" }}
                  labelStyle={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "#35353F",
                  }}
                />
                <MailOutlined />
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="Email"
                  placeholder="Email"
                  style={{ marginBottom: "1em" }}
                  labelStyle={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "#35353F",
                  }}
                />
                <LockOutlined />
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                  placeholder="Password"
                  style={{ marginBottom: "1em" }}
                  labelStyle={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "#35353F",
                  }}
                />
                <PhoneOutlined />
                <FormInput
                  name="phoneNumber"
                  type="text"
                  size="large"
                  label="Phone Number"
                  placeholder="Phone Number"
                  style={{ marginBottom: "1em" }}
                  labelStyle={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "#35353F",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      height: "2.5rem",
                      fontFamily: "Inter,sans-serif",
                      fontSize: "1rem",
                    }}
                  >
                    Register
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default RegisterPage;
