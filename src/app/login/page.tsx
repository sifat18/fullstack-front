import LoginPage from "@/components/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry | Login",
};

const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
