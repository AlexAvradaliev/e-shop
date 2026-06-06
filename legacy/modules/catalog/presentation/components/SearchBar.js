"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [value, setValue] = useState(
    searchParams.get("q") || ""
  );

  function handleSubmit(e) {
    e.preventDefault();

    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (value.trim()) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    params.set("page", "1");

    router.push(
      `/products?${params.toString()}`
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "30px",
      }}
    >
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />
    </form>
  );
}