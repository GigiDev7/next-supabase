import { createClient } from "@/utils/supabase/server";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function getAllBusinesses(cookieStore: ReadonlyRequestCookies) {
  const supabase = createClient(cookieStore);
  const { data, error, status } = await supabase.from("businesses").select();

  return { data, error, status };
}
