"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex justify-center mt-16 flex-col text-center">
      <h1 className="text-lg">Something went wrong! Try again later</h1>
      <Link className="text-blue-500" href="/">
        Home
      </Link>
    </div>
  );
}
