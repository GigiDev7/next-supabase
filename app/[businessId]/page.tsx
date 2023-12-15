import BusinessForm from "@/components/Businesses/BusinessForm";
import { getSingleBusiness } from "@/utils/apis/business";
import { cookies } from "next/headers";

const Page = async ({ params }: { params: { businessId: string } }) => {
  const cookieStore = cookies();
  const { data, error } = await getSingleBusiness(
    cookieStore,
    params.businessId
  );

  if (error) {
    throw error;
  }

  return (
    <div>
      <BusinessForm business={data ? data : undefined} />
    </div>
  );
};

export default Page;
