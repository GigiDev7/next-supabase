"use client";

import { Tables } from "@/utils/supabase/database.types";
import { Input } from "antd";
import Link from "next/link";
import { deleteBusiness, editBusiness } from "@/utils/actions/business";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { useState } from "react";

interface Props {
  business?: Tables<"businesses">;
}

const BusinessForm = ({ business }: Props) => {
  const [nameInput, setNameInput] = useState(business?.name || "");

  const editBusinessAction = editBusiness.bind(null, business!.id);
  const deleteBusinessAction = deleteBusiness.bind(null, business!.id);

  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <Input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          name="name"
          required
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-md text-white disabled:bg-gray-500"
          disabled={business?.name === nameInput}
          type="submit"
          formAction={editBusinessAction}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 px-8 py-2 rounded-md text-white disabled:bg-gray-500"
          type="submit"
          formAction={deleteBusinessAction}
        >
          Delete
        </button>
      </form>
      <Link href="/">Cancel</Link>
    </>
  );
};

export default BusinessForm;
