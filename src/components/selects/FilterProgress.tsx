"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const FilterProgress = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const filterProgressHandler = (label: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (label) {
      params.set("progress", label);
    } else {
      params.delete("progress");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <select
        name="status"
        id="status"
        required
        defaultValue={""}
        className={clsx(
          "bg-white text-base px-4 py-3 border border-slate-200  text-slate-500 rounded-md appearance-none",
          "hover:border-blue-500",
          "focus:outline-none focus:border-none"
        )}
        onChange={(e) => filterProgressHandler(e.target.value)}
      >
        <option className="font-medium" value="">
          🏷️ Progress
        </option>
        <option className="py-2" value="waited">
          ⌛ Waited
        </option>
        <option className="py-2" value="on-progress">
          🚀 On-Progress
        </option>
        <option className="py-2" value="done">
          ✅ Done
        </option>
      </select>
    </>
  );
};

export default FilterProgress;
