import React from "react";
import clsx from "clsx";
import CardSkeleton from "./CardSkeleton";

const ListNoteSkeleton = () => {
  return (
    <div
      className={clsx(
        "notes-container grid grid-cols-1 gap-4",
        "md:grid-cols-2",
        "xl:grid-cols-3"
      )}
    >
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export default ListNoteSkeleton;
