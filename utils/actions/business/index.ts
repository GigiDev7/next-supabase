"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function editBusiness(businessId: string, formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  await supabase
    .from("businesses")
    .update({ name: formData.get("name") as string })
    .eq("id", businessId);

  revalidatePath("/");

  return redirect("/");
}
