import React from "react";

const Page = ({ params }: { params: { businessId: string } }) => {
  return <div>{params.businessId}</div>;
};

export default Page;
