import { Tables } from "@/utils/supabase/database.types";
import React from "react";
import BusinessItem from "./BusinessItem";

const BusinessList = ({
  businessData,
}: {
  businessData: Tables<"businesses">[];
}) => {
  return (
    <div>
      {businessData.map((bus) => (
        <BusinessItem business={bus} key={bus.id} />
      ))}
    </div>
  );
};

export default BusinessList;
