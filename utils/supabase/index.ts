import { createClient } from "@/utils/supabase/server";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export default function getSupebase(cookieStore: ReadonlyRequestCookies) {
  return createClient(cookieStore);
}
