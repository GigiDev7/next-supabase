import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const BusinessForm = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase.auth.getUser();

  console.log(data);

  return <form></form>;
};

export default BusinessForm;
