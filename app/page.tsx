import BusinessList from "@/components/Businesses/BusinessList";
import { getAllBusinesses } from "@/utils/apis/business";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const { data, error } = await getAllBusinesses(cookieStore);

  if (error) {
    throw error;
  }

  return <>{data && <BusinessList businessData={data} />}</>;
}
