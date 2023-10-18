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
      dataIndex: "_id",
      sorter: true,
    },
    {
      title: "Name",
      render: function (data: {
        name: { firstName: string; lastName: string };
      }) {
        const fullName = `${data?.name?.firstName}  ${data?.name?.lastName}`;
        return <>{fullName}</>;
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
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            {/* <Link href={`/super-admin/manage-admin/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link> */}
            <Link href={`/super-admin/manage-admin/edit/${data.id}`}>
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
            label: "super-admin/all-admin",
            link: "/super-admin",
          },
        ]}
      />

      <AnTable
        loading={isLoading}
        columns={columns}
        dataSource={faculties}
        showPagination={false}
      />
    </div>
  );
};
export default AdminPage;
