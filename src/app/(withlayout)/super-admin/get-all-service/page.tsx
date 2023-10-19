"use client";
import BreadCrumb from "@/components/BreadCrumb";
import { getUserInfo } from "@/helpers/authHelper";
import GetServiceCommon from "@/components/GetServiceCommon";

const GetService = () => {
  const { role, service } = getUserInfo() as any;

  const base = role;

  return (
    <div>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "get-all-service", link: `/${base}/get-all-service` },
        ]}
      />
      <GetServiceCommon />
    </div>
  );
};

export default GetService;
