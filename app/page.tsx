import AuthButton from "@/components/AuthButton";
import AddBusinessButton from "@/components/Businesses/AddBusinessButton";
import BusinessList from "@/components/Businesses/BusinessList";
import { getAllBusinesses } from "@/utils/apis/business";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const [businessResponse, authResponse] = await Promise.all([
    getAllBusinesses(cookieStore),
    supabase.auth.getUser(),
  ]);

  if (businessResponse.error) {
    throw businessResponse.error;
  }

  if (authResponse.error) {
    throw authResponse.error;
  }

  const businesses = businessResponse.data;
  const user = authResponse.data.user;

  return (
    <div className="mt-12 w-full">
      <div className="flex justify-between w-full px-12">
        <AddBusinessButton />
        <AuthButton />
      </div>
      {businesses && user && (
        <BusinessList
          businessData={businesses}
          userEmail={user.email as string}
        />
      )}
    </div>
  );
}
