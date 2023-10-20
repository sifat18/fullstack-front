"use client";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import BreadCrumb from "@/components/BreadCrumb";

import { getUserInfo } from "@/helpers/authHelper";

import GetReviewsCommonAdmin from "@/components/GetReviewsCommonAdmin";

const GetReviews = () => {
  const { role, service } = getUserInfo() as any;

  const base = role;

  return (
    <div>
      <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "reviews", link: `/${base}/manage-reviews` },
        ]}
      />
      <GetReviewsCommonAdmin />
    </div>
  );
};

export default GetReviews;
