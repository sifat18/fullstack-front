"use client";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import BreadCrumb from "@/components/BreadCrumb";

import { Button, Col, Input, Modal, Row, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import { useDebounced } from "@/redux/hooks";
import {
  useDeleteServiceMutation,
  useServicesQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import AnTable from "@/components/AnTable";
import ActionBar from "@/components/Forms/ActionBar";
import { getUserInfo } from "@/helpers/authHelper";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import { serviceTypeOptions, statusOptions } from "@/constants/role";
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
