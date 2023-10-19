"use client";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import BreadCrumb from "@/components/BreadCrumb";

import { getUserInfo } from "@/helpers/authHelper";

import GetClientsCommon from "@/components/GetClientsCommon";

const GetClients = () => {
  const { role, service } = getUserInfo() as any;

  const base = role;

  return (
    <div>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "get-all-clients", link: `/${base}/get-all-clients` },
        ]}
      />
      <GetClientsCommon />
    </div>
  );
};

export default GetClients;
