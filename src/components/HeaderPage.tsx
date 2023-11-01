"use client";
const { Header } = Layout;
import {
  MenuOutlined,
  PhoneOutlined,
  DashboardOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../assets/output.png";
import Image from "next/image";
import { Avatar, Layout, Menu } from "antd";
import Link from "next/link";
import { getUserInfo, isLoggedIn, removeUserInfo } from "@/helpers/authHelper";
import { useRouter } from "next/navigation";
import { useState } from "react";
const { SubMenu } = Menu;
const HeaderPage = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  const router = useRouter();

  const logout = () => {
    removeUserInfo("accessToken");
    router.push("/login");
  };
  const { role } = getUserInfo() as any;
  return (
    <div className="navbar">
      <div className="logo">
        <Image
          src={logo}
          alt=""
          style={{
            transform: "rotate(369.64deg)",
          }}
        ></Image>
        Daily Laundry
      </div>
      <ul className={`menu ${menuActive ? "active" : ""}`}>
        <Link href={"/"}>
          <li>Home</li>{" "}
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={"/"}>
          <li>Services</li>
        </Link>
        <Link href={"/"}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="menu-button" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};
export default HeaderPage;
