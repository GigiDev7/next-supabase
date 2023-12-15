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
    <div className="flex justify-center mt-16">
      <h1 className="text-lg">Something went wrong! Try again later</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
