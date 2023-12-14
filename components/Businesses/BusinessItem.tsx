import { Tables } from "@/utils/supabase/database.types";
import React from "react";

const BusinessItem = ({ business }: { business: Tables<"businesses"> }) => {
  return (
    <div>
      <span>{business.name}</span>
      <span>{business.created_by}</span>
      <span>{business.created_at}</span>
    </div>
  );
};

export default BusinessItem;
