"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CardProps } from "@/types/type";
import { dateFormat } from "@/lib/dateFormat";
import { deleteNote } from "@/lib/actions";
import parse from "html-react-parser";

import CardSkeleton from "../skeleton/CardSkeleton";
import { progressLabelNameStyle } from "@/lib/utils";

const CardNote: React.FC<CardProps> = ({
  title,
  content,
  createdAt,
  status,
  updatedAt,
  id,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const deleteHandler = () => {
    if (window.confirm("Apakah anda ingin menghapus catatan ini ?")) {
      setIsLoading((loading) => !loading);
      const deleteWithId = deleteNote.bind(null, id);

      deleteWithId().finally(() => setIsLoading((loading) => !loading));
    }
  };

  const moveToDetails = () => {
    // router.push(`/notes/details/${id}`);
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
      onClick={moveToDetails}
    >
      <div className="top-content">
        <span className="flex justify-between items-start">
          <span>
            <h3 className="font-semibold text-slate-700">{title}</h3>
            <time
              className="text-slate-500 basis-[55%] text-xs sm:text-sm"
              suppressHydrationWarning
            >
              {dateFormat(updatedAt)}
            </time>
          </span>
          <span className="flex gap-3">
            <Link
              href={`/notes/edit/${id}`}
              className="text-2xl "
              title="edit note"
            >
              📝
            </Link>
            <form action={() => deleteHandler()}>
              <button className="text-2xl" title="delete note">
                🚮
              </button>
            </form>
          </span>
        </span>
        <Link href={`/notes/details/${id}`}>
          <span className="text-slate-600 line-clamp-3 mt-4">
            {parse(content)}
          </span>
        </Link>
      </div>
      <div className="bottom-content flex justify-between items-center mt-2 gap-2">
        <Link
          className="text-blue-600 basis-[55%] text-sm font-semibold sm:text-base hover:underline"
          href={`/notes/details/${id}`}
        >
          Baca detail
        </Link>

        <span
          className={clsx(
            "border rounded-full",
            status === "waited"
              ? "bg-blue-400"
              : status === "done"
              ? "bg-green-400"
              : "bg-orange-400"
          )}
        >
          <Link href={`/notes/details/${id}`}>
            <p className="text-white text-center text-xs font-semibold basis-[45%] px-4 py-2 md:text-sm">
              {progressLabelNameStyle(status)}
            </p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CardNote;
