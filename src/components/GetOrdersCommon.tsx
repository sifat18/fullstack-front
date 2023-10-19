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
import { IOrder, IService } from "@/types/common";
import {
  useDeleteOrderMutation,
  useOrdersQuery,
  useUpdateOrderMutation,
} from "@/redux/api/adminApi";

const GetOrdersCommon = () => {
  const [updateOrder] = useUpdateOrderMutation();
  const [deleteOrder] = useDeleteOrderMutation();

  const query: Record<string, any> = {};
  const { role } = getUserInfo() as any;

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState({});
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const { data, isLoading } = useOrdersQuery({ ...query });

  const orders = data?.orders;
  const meta = data?.meta;

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
      dataIndex: "status",
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
                          deleteOrder(data?._id);
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

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const onSubmit = async (data: any) => {
    data.price = parseInt(data.price);
    data.slots = parseInt(data.slots);

    try {
      const res = await updateOrder(data).unwrap();

      if (res) {
        message.success("Service updated");
        setIsModalOpen(false);
      } else {
        message.error("Something went wrong");
      }
    } catch (err: any) {
      message.error(err.message || "Something went wrong");
    }
  };
  const defaultValues = {
    status: (singleData as any)?.status,
    id: (singleData as any)?._id,
  };
  return (
    <div>
      {/* <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "get-all-service", link: `/${base}/get-all-service` },
        ]}
      /> */}

      <ActionBar title="Orders List">
        <Input
          type="text"
          size="large"
          placeholder="Search..."
          style={{
            width: "20%",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{ margin: "0px 5px" }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <AnTable
        loading={isLoading}
        columns={columns}
        dataSource={orders}
        pageSize={size}
        totalPages={meta?.count}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
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
                      name="status"
                      label="Status"
                      options={[
                        { value: "pending", label: "Pending" },
                        { value: "approved", label: "Approved" },
                      ]}
                    />
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

export default GetOrdersCommon;
