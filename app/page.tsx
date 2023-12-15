import AuthButton from "@/components/AuthButton";
import AddBusinessButton from "@/components/Businesses/AddBusinessButton";
import BusinessList from "@/components/Businesses/BusinessList";
import { getAllBusinesses } from "@/utils/apis/business";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const { data, error } = await getAllBusinesses(cookieStore);

  if (error) {
    throw error;
  }

  return (
    <div className="mt-12 w-full">
      <div className="flex justify-between w-full px-12">
        <AddBusinessButton />
        <AuthButton />
      </div>
      {data && <BusinessList businessData={data} />}
    </div>
  );
}
