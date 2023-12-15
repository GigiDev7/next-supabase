"use client";

import { Table } from "antd";
import { Tables } from "@/utils/supabase/database.types";
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
          return <Link href={`/${record.id}`}>{val}</Link>;
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
    },
  ];

  return (
    <div className="w-1/2 mt-12 mx-auto">
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
