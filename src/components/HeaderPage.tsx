"use client";
import logo from "../assets/output.png";
import Image from "next/image";
import Link from "next/link";
import { getUserInfo, removeUserInfo } from "@/helpers/authHelper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const HeaderPage = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [first, setfirst] = useState("");

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  const router = useRouter();

  const logout = () => {
    removeUserInfo("accessToken");
    router.push("/login");
  };
  const { role } = getUserInfo() as any;
  useEffect(() => {
    setfirst(role);
  }, [role]);

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
        {first ? (
          <Link href={"/profile"}>
            <li>Dashboard</li>
          </Link>
        ) : null}
        {first ? (
          <li style={{ cursor: "pointer" }} onClick={logout}>
            Logout
          </li>
        ) : (
          <Link href={"/login"}>
            <li>Login</li>
          </Link>
        )}
        {!first ? (
          <Link href={"/register"}>
            <li>Register</li>
          </Link>
        ) : null}
      </ul>
      <div className="menu-button" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};
export default HeaderPage;
