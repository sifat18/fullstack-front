"use client";
import { Button, Col, Input, Row, message } from "antd";
import login from "../assets/login.png";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/schemas/login";
import Form from "./Forms/Form";
import FormInput from "./Forms/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { getUserInfo, storeUserInfo } from "@/helpers/authHelper";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const { role }: any = getUserInfo();
  if (role) {
    router.push("/profile");
  }
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.accessToken) {
        router.push("/profile");
        message.success("User logged in successfully!");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (err: any) {
      message.error(err.message);
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
        <Image src={login} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
            fontFamily: "Grandstander, cursive",
            fontSize: "1.2rem",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                name="email"
                type="email"
                size="large"
                label="User Email"
                required
                labelStyle={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "#35353F",
                }}
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
                required
                labelStyle={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "#35353F",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "2.5rem",
                  fontSize: "1.2rem",
                  fontFamily: "Inter,sans-serif",
                }}
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
