"use client";

import { Table } from "antd";
import { Tables } from "@/utils/supabase/database.types";
import Link from "next/link";

const BusinessList = ({
  businessData,
}: {
  businessData: Tables<"businesses">[];
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (val: string, record: Tables<"businesses">) => {
        return <Link href={`/${record.id}`}>{val}</Link>;
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
