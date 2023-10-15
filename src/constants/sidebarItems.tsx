import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE, ADMIN_SERVICE } from "./role";
export const sidebarItems = (role: string, service: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/update-profile`}>Update Info</Link>,
          key: `/${role}/profile-update`,
        },
      ],
    },
  ];

  const clientAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/manage-client`}>Manage Clients</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-client`,
      children: [
        {
          label: <Link href={`/${role}/get-all-clients`}>All clients</Link>,
          key: `/${role}/get-all-clients`,
        },
        {
          label: <Link href={`/${role}/get-all-order`}>All Order</Link>,
          key: `/${role}/get-all-order`,
        },
      ],
    },
  ];
  const contentAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/manage-services`}>Manage Services</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-services`,
      children: [
        {
          label: <Link href={`/${role}/get-all-service`}>All Services</Link>,
          key: `/${role}/get-all-service`,
        },
        {
          label: <Link href={`/${role}/create-service`}>Create Services</Link>,
          key: `/${role}/create-service`,
        },
      ],
    },
    {
      label: <Link href={`/${role}/manage-reviews`}>Manage Reviews</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-reviews`,
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...clientAdminSidebarItems,
    ...contentAdminSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
      children: [
        {
          label: <Link href={`/${role}/create-admin`}>Create Admin</Link>,
          key: `/${role}/create-admin`,
        },
        {
          label: <Link href={`/${role}/all-admin`}>All Admin</Link>,
          key: `/${role}/all-admin`,
        },
      ],
    },
  ];

  const clientSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/orders`}>Orders</Link>,
      icon: <TableOutlined />,
      key: `/${role}/orders`,
    },
    {
      label: <Link href={`/${role}/reviews`}>Reviews</Link>,
      icon: <ScheduleOutlined />,
      key: `/${role}/reviews`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN && service === ADMIN_SERVICE.CONTENT)
    return contentAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN && service === ADMIN_SERVICE.USER)
    return clientAdminSidebarItems;
  else if (role === USER_ROLE.CLIENT) return clientSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
