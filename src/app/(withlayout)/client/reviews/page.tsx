"use client";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import BreadCrumb from "@/components/BreadCrumb";

import { getUserInfo } from "@/helpers/authHelper";

import GetReviewsCommon from "@/components/GetReviewsCommon";

const GetReviews = () => {
  const { role, service } = getUserInfo() as any;

  const base = role;

  return (
    <div>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "reviews", link: `/${base}/reviews` },
        ]}
      />
      <GetReviewsCommon />
    </div>
  );
};

export default GetReviews;
