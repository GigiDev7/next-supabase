"use client";

import { useState } from "react";
import { Tables } from "@/utils/supabase/database.types";
import { Input } from "antd";
import Link from "next/link";
import {
  addBusiness,
  deleteBusiness,
  editBusiness,
} from "@/utils/actions/business";
import SubmitButton from "./SubmitButton";

interface Props {
  business?: Tables<"businesses">;
  userEmail?: string;
}

const BusinessForm = ({ business, userEmail }: Props) => {
  const [nameInput, setNameInput] = useState(business?.name || "");

  return (
    <div className="flex flex-col gap-6 mt-12">
      <form className="flex flex-col gap-6 w-72">
        <Input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          name="name"
          required
          placeholder="Business name"
        />
        {business && (
          <>
            <SubmitButton
              className="bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-md text-white disabled:bg-gray-500"
              disabled={business?.name === nameInput}
              type="submit"
              formAction={editBusiness.bind(null, business.id)}
            >
              Edit
            </SubmitButton>
            <SubmitButton
              className="bg-red-500 hover:bg-red-600 px-8 py-2 rounded-md text-white disabled:bg-gray-500"
              type="submit"
              formAction={deleteBusiness.bind(null, business.id)}
            >
              Delete
            </SubmitButton>
          </>
        )}

        {userEmail && (
          <SubmitButton
            disabled={!nameInput}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-md text-white disabled:bg-gray-500"
            type="submit"
            formAction={addBusiness.bind(null, userEmail)}
          >
            Add
          </SubmitButton>
        )}
      </form>
      <Link href="/">Cancel</Link>
    </div>
  );
};

export default BusinessForm;
