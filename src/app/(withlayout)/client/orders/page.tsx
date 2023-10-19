"use client";
import BreadCrumb from "@/components/BreadCrumb";

import { getUserInfo } from "@/helpers/authHelper";

import GetOrdersCommon from "@/components/GetOrdersCommon";

const GetOrders = () => {
  const { role, service } = getUserInfo() as any;

  const base = role;

  return (
    <div>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "orders", link: `/${base}/orders` },
        ]}
      />
      <GetOrdersCommon />
    </div>
  );
};

export default GetOrders;
