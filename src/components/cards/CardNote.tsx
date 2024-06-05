"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import Link from "next/link";
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
  const session = useSession();
  const userId = session.data?.user?.id;

  const deleteHandler = () => {
    if (window.confirm("Apakah anda ingin menghapus catatan ini ?")) {
      setIsLoading((loading) => !loading);
      const deleteWithId = deleteNote.bind(null, id, userId as string);

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
        "min-h-[190px] p-4 relative bg-slate-100 flex flex-col justify-between h-full border border-slate-400 rounded-md transform duration-100",
        "hover:border-1 hover:border-red-300"
      )}
    >
      <div className="top-content">
        <span className="flex justify-between items-start">
          <span className="flex flex-col">
            <Link
              href={`/notes/details/${id}`}
              className="font-semibold text-slate-700 line-clamp-1"
            >
              {title}
            </Link>
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
              className="text-2xl transform duration-150 hover:scale-125"
              title="edit note"
            >
              📝
            </Link>
            <form action={() => deleteHandler()}>
              <button
                className="text-2xl transform duration-150 hover:scale-125"
                title="delete note"
              >
                🚮
              </button>
            </form>
          </span>
        </span>
        <Link href={`/notes/details/${id}`}>
          <span className="text-slate-600 line-clamp-3 mt-4 text-sm">
            {parse(content)}
          </span>
        </Link>
      </div>
      <div className="bottom-content flex justify-between items-center mt-2 gap-2">
        <Link
          className="text-blue-600 basis-[55%] text-sm font-medium sm:text-base hover:underline hover:text-indigo-600"
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
            <p className="text-white text-center text-xs font-semibold basis-[45%] px-4 py-2">
              {progressLabelNameStyle(status)}
            </p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CardNote;
