"use client";
import { Button } from "antd";
import Link from "next/link";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";
import dayjs from "dayjs";
import { useAdminsQuery } from "@/redux/api/adminApi";
import BreadCrumb from "@/components/BreadCrumb";
import AnTable from "@/components/AnTable";

const AdminPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  //   const debouncedSearchTerm = useDebounced({
  //     searchQuery: searchTerm,
  //     delay: 600,
  //   });

  //   if (!!debouncedSearchTerm) {
  //     query["searchTerm"] = debouncedSearchTerm;

  const { data, isLoading } = useAdminsQuery({});

  const faculties = data?.admins;
  console.log(faculties);

  const columns = [
    {
      title: "Id",
      dataIndex: "facultyId",
      sorter: true,
    },
    {
      title: "Name",
      render: function (data: Record<string, string>) {
        const fullName = `${data?.firstName} ${data?.middleName} ${data?.lastName}`;
        return <>{fullName}</>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Department",
      dataIndex: "academicDepartment",
      render: function (data: any) {
        return <>{data?.title}</>;
      },
    },
    {
      title: "Designation",
      dataIndex: "designation",
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
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/manage-faculty/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/admin/manage-faculty/edit/${data.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    // setPage(page);
    // setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    // setSortBy(field as string);
    // setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    // setSortBy("");
    // setSortOrder("");
    // setSearchTerm("");
  };
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />

      <AnTable
        loading={isLoading}
        columns={columns}
        dataSource={faculties}
      />
    </div>
  );
};
export default AdminPage;
