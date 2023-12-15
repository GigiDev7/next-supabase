import { createClient } from "@/utils/supabase/server";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function getAllBusinesses(cookieStore: ReadonlyRequestCookies) {
  const supabase = createClient(cookieStore);
  const { data, error, status } = await supabase.from("businesses").select();

  return { data, error, status };
}

export async function getSingleBusiness(
  cookieStore: ReadonlyRequestCookies,
  businessId: string
) {
  const supabase = createClient(cookieStore);
  const { data, error, status } = await supabase
    .from("businesses")
    .select()
    .eq("id", businessId)
    .maybeSingle();

  return { data, error, status };
}
