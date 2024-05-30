import React from "react";
import { CardProps } from "@/types/type";
import { dateFormat } from "@/lib/dateFormat";
import clsx from "clsx";

const CardNote: React.FC<CardProps> = ({
  title,
  content,
  createdAt,
  status,
  updatedAt,
}) => {
  return (
    <div
      className={clsx(
        "p-4 relative bg-slate-100 flex flex-col justify-between h-full border border-slate-400 rounded-md cursor-pointer transform duration-200",
        "hover:border-red-300"
      )}
    >
      <h3 className="font-semibold text-slate-700">{title}</h3>
      <p className="text-slate-600 py-2 line-clamp-3">{content}</p>
      <div className="bottom-content flex justify-between items-center mt-2">
        <p className="text-slate-500 basis-1/2">{dateFormat(createdAt)}</p>
        <span
          className={clsx(
            "border rounded-full",
            status === "waited"
              ? "bg-blue-400"
              : status === "on-progress"
              ? "bg-orange-400"
              : "bg-green-400"
          )}
        >
          <p className="text-white text-center font-semibold basis-1/2 px-4 py-2 ">
            {status}
          </p>
        </span>
      </div>
    </div>
  );
};

export default CardNote;
