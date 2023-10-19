"use client";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { Button, Col, Input, Modal, Row, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import AnTable from "@/components/AnTable";
import { getUserInfo } from "@/helpers/authHelper";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import { serviceTypeOptions, statusOptions } from "@/constants/role";
import { IOrder, IService } from "@/types/common";
import {
  useDeleteOrderMutation,
  useOrdersQuery,
  useUpdateOrderMutation,
} from "@/redux/api/adminApi";
import {
  useDeleteReviewMutation,
  useReviewsQuery,
  useUpdateReviewMutation,
} from "@/redux/api/userApi";

const GetReviewsCommon = () => {
  const [updateReview] = useUpdateReviewMutation();
  const [deleteReview] = useDeleteReviewMutation();

  const query: Record<string, any> = {};
  const { role } = getUserInfo() as any;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState({});
  const { data, isLoading } = useReviewsQuery({});

  const reviews = data?.reviews;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "Client Name",
      sorter: true,
      render: function (data: any, record: any, index: number) {
        return (
          <>
            {data?.client?.name?.firstName + " " + data?.client?.name?.lastName}
          </>
        );
      },
    },
    {
      title: "Service Name",
      render: function (data: any, record: any, index: number) {
        return <>{data?.services?.name}</>;
      },
      sorter: true,
    },
    {
      title: "Service Type",
      render: function (data: any, record: any, index: number) {
        return <>{data?.services?.serviceType}</>;
      },
      sorter: true,
    },
    {
      title: "Service Price",
      render: function (data: any, record: any, index: number) {
        return <>{data?.services?.price}</>;
      },
      sorter: true,
    },
    {
      title: "Status",
      render: function (data: any, record: any, index: number) {
        return <>{data?.services?.status}</>;
      },
    },
    {
      title: "Review",
      dataIndex: "message",
      sorter: true,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      sorter: true,
    },

    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => {
                setSingleData(data);
                setIsModalOpen(true);
              }}
              type="primary"
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={() => {
                Modal.confirm({
                  title: "Confirm",
                  content: "Are you sure? ...",
                  footer: (_, { CancelBtn }) => (
                    <>
                      <Button
                        onClick={() => {
                          deleteReview(data?._id);
                          Modal.destroyAll();
                        }}
                      >
                        Yes
                      </Button>
                      <CancelBtn />
                      {/* <OkBtn /> */}
                    </>
                  ),
                });
              }}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onSubmit = async (data: any) => {
    data.id = (singleData as any)?._id;
    data.rating = parseInt(data.rating);
    try {
      const res = await updateReview(data).unwrap();

      if (res) {
        message.success("Review updated");
        setIsModalOpen(false);
      } else {
        message.error("Something went wrong");
      }
    } catch (err: any) {
      message.error(err.message || "Something went wrong");
    }
  };
  const defaultValues = {
    rating: (singleData as any)?.rating,
    message: (singleData as any)?.message,
    id: (singleData as any)?._id,
  };
  return (
    <div>
      <AnTable
        loading={isLoading}
        columns={columns}
        dataSource={reviews}
        showSizeChanger={true}
        showPagination={false}
      />

      <Modal
        title="Update Order Status"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row
          justify={"center"}
          style={{
            minHeight: "25vh",
          }}
        >
          <h1
            style={{
              margin: "15px 0px",
            }}
          >
            Update {(singleData as IOrder)?.client?.name?.firstName} data
          </h1>
          <div>
            <Form defaultValues={defaultValues} submitHandler={onSubmit}>
              <div
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                  padding: "15px",
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    margin: "5px 0px",
                  }}
                >
                  Order Status Update
                </p>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="name"
                      label="Service name"
                      size="large"
                      value={(singleData as IOrder)?.services?.name}
                    />
                  </Col>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormSelectField
                      name="rating"
                      label="Rating"
                      options={[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                        { value: "5", label: "5" },
                      ]}
                    />
                  </Col>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormTextArea rows={3} name="message" label="Status" />
                  </Col>
                </Row>
              </div>

              <div
                style={{
                  marginTop: "3em",
                  marginLeft: "2em",
                }}
              >
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
                <Button
                  type="primary"
                  style={{ marginLeft: "1em" }}
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
          {/* </Col> */}
        </Row>
      </Modal>
    </div>
  );
};

export default GetReviewsCommon;
