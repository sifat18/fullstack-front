"use client";
import BreadCrumb from "@/components/BreadCrumb";
import CreateServiceCommon from "@/components/CreateServiceCommon";

import { getUserInfo } from "@/helpers/authHelper";

import React from "react";

function CreateService() {
  const { role, service } = getUserInfo() as any;

  const base = role;

  return (
    <>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "create-service", link: `/${base}/create-service` },
        ]}
      />
      <CreateServiceCommon />
    </>
  );
}

export default CreateService;
