"use client";

import { useRouter } from "next/navigation";

export default function DetailLink({ url, children }) {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(url);
      }}
    >
      {children}
    </button>
  );
}
