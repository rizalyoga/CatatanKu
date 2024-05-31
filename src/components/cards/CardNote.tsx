"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { CardProps } from "@/types/type";
import { dateFormat } from "@/lib/dateFormat";
import { deleteNote } from "@/lib/actions";

import CardSkeleton from "../skeleton/CardSkeleton";

const CardNote: React.FC<CardProps> = ({
  title,
  content,
  createdAt,
  status,
  updatedAt,
  id,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteHandler = () => {
    if (window.confirm("Apakah anda ingin menghapus catatan ini ?")) {
      setIsLoading((loading) => !loading);
      const deleteWithId = deleteNote.bind(null, id);

      deleteWithId().finally(() => setIsLoading((loading) => !loading));
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center ">
        <CardSkeleton />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "min-h-[190px] p-4 relative bg-slate-100 flex flex-col justify-between h-full border border-slate-400 rounded-md cursor-pointer transform duration-100",
        "hover:border-1 hover:border-red-300"
      )}
    >
      <div className="top-content">
        <span className="flex justify-between items-start">
          <h3 className="font-semibold text-slate-700">{title}</h3>
          <span className="flex gap-3">
            <Link
              href={`/notes/edit/${id}`}
              className="text-lg"
              title="edit note"
            >
              📝
            </Link>
            <form action={() => deleteHandler()}>
              <button className="text-lg" title="delete note">
                🚮
              </button>
            </form>
          </span>
        </span>
        <p className="text-slate-600 line-clamp-3 mt-1">{content}</p>
      </div>
      <div className="bottom-content flex justify-between items-center mt-2">
        <p className="text-slate-500 basis-[55%]">{dateFormat(createdAt)}</p>
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
          <p className="text-white text-center text-xs font-semibold basis-[45%] px-4 py-2 md:text-sm">
            {status}
          </p>
        </span>
      </div>
    </div>
  );
};

export default CardNote;
