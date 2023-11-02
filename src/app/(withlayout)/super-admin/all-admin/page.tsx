"use client";
import { Button, Col, Modal, Row, Space, message } from "antd";
import Link from "next/link";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";
import dayjs from "dayjs";
import {
  useAdminsQuery,
  useDeleteAdminMutation,
  useUpdateAdminMutation,
} from "@/redux/api/adminApi";
import BreadCrumb from "@/components/BreadCrumb";
import AnTable from "@/components/AnTable";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { serviceOptions } from "@/constants/role";
import { IAdmin } from "@/types/common";
import Title from "antd/es/typography/Title";

const AdminPage = () => {
  const [updateAdmin] = useUpdateAdminMutation();
  const [deleteAdmin] = useDeleteAdminMutation();

  type FormValues = {
    email: string;
    service: string;
  };
  const onSubmit = async (data: any) => {
    try {
      const res = await updateAdmin(data).unwrap();
      if (res) {
        message.success("Admin updated");
        setIsModalOpen(false);
      } else {
        message.error("Something went wrong");
      }
    } catch (err: any) {
      message.error(err.message || "Something went wrong");
    }
  };
  const { data, isLoading } = useAdminsQuery({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const admins = data?.admins;

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      sorter: true,
      render: function (data: any, record: any, index: number) {
        return <>{index + 1}</>;
      },
    },
    {
      title: "Name",
      render: function (data: {
        name: { firstName: string; lastName: string };
      }) {
        const fullName = `${data?.name?.firstName}  ${data?.name?.lastName}`;
        return <>{data?.name?.firstName + " " + data?.name?.lastName}</>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Management",
      dataIndex: "service",
    },

    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Contact no.",
      dataIndex: "phoneNumber",
    },
    {
      title: "Action",
      render: function (data: any, record: any, index: number) {
        return (
          <>
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => {
                setSingleData(record);
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
                          deleteAdmin(data?._id);
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
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "super-admin/all-admin",
            link: "/super-admin",
          },
        ]}
      />

      <AnTable
        loading={isLoading}
        columns={columns}
        dataSource={admins}
        showPagination={false}
      />

      <Modal
        title={
          <Title
            style={{
              fontFamily: "Grandstander, cursive",
              fontSize: "1rem",
              color: "#21B7E2",
            }}
            level={2}
          >
            Admin Details{" "}
          </Title>
        }
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
              margin: "0.5em 0",
              fontFamily: "Rasa, serif",
              fontSize: "1.5rem",
              color: "#35353F",
            }}
          >
            Update {(singleData as any)?.name?.firstName} data
          </h1>
          <div style={{ width: "100%" }}>
            <Form
              defaultValues={{
                id: (singleData as any)?._id,
                email: (singleData as IAdmin)?.email,
              }}
              submitHandler={onSubmit}
            >
              <div>
                <div style={{ width: "100%" }}>
                  <FormInput
                    name="email"
                    type="email"
                    size="large"
                    labelStyle={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.8rem",
                      color: "#35353F",
                    }}
                    label={"Email"}
                  />
                </div>
                <div
                  style={{
                    margin: "15px 0px",
                  }}
                >
                  <FormSelectField
                    name="service"
                    label="Service"
                    labelStyle={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.8rem",
                      color: "#35353F",
                    }}
                    options={serviceOptions}
                  />
                </div>
                <div
                  style={{
                    // marginTop: "3em",
                    // marginLeft: "2em",
                    margin: "3em 0 0 21em",
                  }}
                >
                  <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginLeft: "1em" }}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </Form>
          </div>
          {/* </Col> */}
        </Row>
      </Modal>
    </div>
  );
};
export default AdminPage;
