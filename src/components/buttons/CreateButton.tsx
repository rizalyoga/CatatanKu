import React from "react";
import Link from "next/link";
import clsx from "clsx";

const CreateButton = () => {
  return (
    <Link href={"/notes/create"}>
      <button
        className={clsx(
          "mb-5 px-4 py-3 font-medium rounded-md bg-blue-500 text-white transform duration-200",
          "hover:bg-blue-600"
        )}
      >
        ➕ Catatan Baru
      </button>
    </Link>
  );
};

export default CreateButton;
