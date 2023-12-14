import Link from "next/link";

const AddBusinessButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-md text-white">
      <Link href="/new">Add business</Link>
    </button>
  );
};

export default AddBusinessButton;
