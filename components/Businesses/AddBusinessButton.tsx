import Link from "next/link";

const AddBusinessButton = () => {
  return (
    <Link
      className="bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-md text-white"
      href="/new"
    >
      Add business
    </Link>
  );
};

export default AddBusinessButton;
