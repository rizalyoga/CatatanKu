"use client";

import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const searchHandler = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 my-4">
      <input
        ref={searchInputRef}
        type="text"
        className={clsx(
          "w-full border border-gray-200 text-gray-600 py-2 pl-10 outline-2 rounded-md",
          "placeholder:text-sm",
          "focus:ring-2 focus:ring-blue-400 focus:outline-blue-400"
        )}
        placeholder="Tekan ' / ' untuk mencari"
        onChange={(e) => searchHandler(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <p className="absolute left-3 top-2 font-xl">🔍</p>
    </div>
  );
};

export default Search;
