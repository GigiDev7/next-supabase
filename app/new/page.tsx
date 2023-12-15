import BusinessForm from "@/components/Businesses/BusinessForm";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const Page = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <BusinessForm userEmail={user?.email} />;
};

export default Page;
