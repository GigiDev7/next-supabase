import getSupebase from "@/utils/supabase";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function getAllBusinesses(cookieStore: ReadonlyRequestCookies) {
  const supabase = getSupebase(cookieStore);
  const { data, error, status } = await supabase.from("businesses").select();

  return { data, error, status };
}
