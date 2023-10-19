"use client";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import BreadCrumb from "@/components/BreadCrumb";

import { getUserInfo } from "@/helpers/authHelper";

import GetClientsCommon from "@/components/GetClientsCommon";
import GetOrdersCommon from "@/components/GetOrdersCommon";

const GetOrders = () => {
  const { role, service } = getUserInfo() as any;

  const base = role;

  return (
    <div>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "get-all-orders", link: `/${base}/get-all-orders` },
        ]}
      />
      <GetOrdersCommon />
    </div>
  );
};

export default GetOrders;
