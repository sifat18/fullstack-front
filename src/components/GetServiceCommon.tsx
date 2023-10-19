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
import { IService } from "@/types/common";

const GetServiceCommon = () => {
  const [updateService] = useUpdateServiceMutation();
  const [deleteService] = useDeleteServiceMutation();

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
  const { data, isLoading } = useServicesQuery({ ...query });

  const services = data?.services;
  const meta = data?.meta;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "name",
      sorter: true,
    },
    {
      title: "Service Type",
      dataIndex: "serviceType",
      sorter: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: true,
    },
    {
      title: "Slots",
      dataIndex: "slots",
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
                          deleteService(data?._id).then((res) => {
                            if ((res as any)?.data) {
                              message.success("Service deleted");
                            } else {
                              message.error("The Service is Booked");
                            }
                          });
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
      const res = await updateService(data).unwrap();

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
    name: (singleData as IService)?.name,
    price: (singleData as IService)?.price,
    slots: (singleData as IService)?.slots,
    description: (singleData as IService)?.description,
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

      <ActionBar title="Service List">
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
          <Link href={`/${role}/create-service`}>
            <Button type="primary">Create</Button>
          </Link>
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
        dataSource={services}
        pageSize={size}
        totalPages={meta?.count}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      <Modal
        title="Update Service"
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
            Update {(singleData as IService)?.name} data
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
                  Service information
                </p>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormInput name="name" label="Service name" size="large" />
                  </Col>

                  <Col span={8} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="price"
                      label="Price"
                      size="large"
                      type="number"
                    />
                  </Col>
                  <Col span={8} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="slots"
                      label="Slots Per day"
                      size="large"
                      type={"number"}
                    />
                  </Col>

                  <Col span={12} style={{ margin: "10px 0" }}>
                    <FormSelectField
                      name="serviceType"
                      label="Service Type"
                      options={serviceTypeOptions}
                    />
                  </Col>
                  <Col span={12} style={{ margin: "10px 0" }}>
                    <FormSelectField
                      name="status"
                      label="Status"
                      options={statusOptions}
                    />
                  </Col>
                  <Col span={24} style={{ margin: "10px 0" }}>
                    <FormTextArea
                      rows={3}
                      name="description"
                      label="description"
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

export default GetServiceCommon;
