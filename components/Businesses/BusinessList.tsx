"use client";

import { Table } from "antd";
import { Tables } from "@/utils/supabase/database.types";
import dayjs from "dayjs";
import Link from "next/link";

interface Props {
  businessData: Tables<"businesses">[];
  userEmail: string;
}

const BusinessList = ({ businessData, userEmail }: Props) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (val: string, record: Tables<"businesses">) => {
        if (userEmail === record.created_by) {
          return <Link href={`/${record.id}`}>{val} (edit)</Link>;
        } else {
          return <span>{val}</span>;
        }
      },
    },
    {
      title: "Created By",
      dataIndex: "created_by",
      key: "created_by",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (val: any, record: Tables<"businesses">) => {
        return <span>{dayjs(val).format("YYYY-MM-DD")}</span>;
      },
    },
  ];

  return (
    <div className="w-2/3 lg:w-1/2 mt-12 mx-auto">
      <Table
        dataSource={businessData}
        rowKey={(record) => record.id}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default BusinessList;
