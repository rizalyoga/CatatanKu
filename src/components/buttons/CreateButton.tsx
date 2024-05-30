import React from "react";
import Link from "next/link";
import clsx from "clsx";

const CreateButton = () => {
  return (
    <Link href={"/notes/create"}>
      <button
        className={clsx(
          "my-6 px-4 py-3 rounded-md bg-blue-500 text-white transform duration-200",
          "hover:bg-blue-600"
        )}
      >
        + Create Note
      </button>
    </Link>
  );
};

export default CreateButton;
