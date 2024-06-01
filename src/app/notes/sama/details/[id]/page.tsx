import React from "react";
import Link from "next/link";
import { getNoteById } from "@/lib/data";
import clsx from "clsx";
import { progressLabelNameStyle, progressLabelStyle } from "@/lib/utils";
import { dateFormat } from "@/lib/dateFormat";
import Modal from "@/components/modals/Modal";

const DetailsModal = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const note = await getNoteById(id);

  return (
    <Modal>
      <article
        className={clsx(
          "bg-slate-200 p-4 rounded-md border border-slate-300 w-full mx-4 -mt-8",
          "lg:max-w-[800px]"
        )}
      >
        <div className="flex justify-between items-center gap-2">
          <h1 className="font-bold text-base text-slate-700 mt-1 sm:text-xl md:text-2xl">
            {note?.title}
          </h1>
          <span
            className={clsx(
              "border rounded-full",
              progressLabelStyle(note?.status as string)
            )}
          >
            <p className="text-center font-semibold text-xs text-white px-6 py-2 sm:text-sm sm:font-bold">
              {progressLabelNameStyle(note?.status as string)}
            </p>
          </span>
        </div>
        <p className="my-6 p-4 bg-slate-50 rounded-md text-slate-600 min-h-[200px] border border-slate-200">
          {note?.content}
        </p>
        <span className="flex justify-between items-center gap-2">
          <p className="text-sm font-semibold text-slate-600">
            Terakhir diperbarui pada : {""}
            {dateFormat(note?.updatedAt.toString() as string)}
          </p>
          <Link
            className={clsx(
              "bg-blue-400 text-white font-semibold px-6 py-2 rounded-md transform duration-200",
              "hover:bg-blue-600",
              "active:bg-blue-400"
            )}
            href={`/notes/edit/${note?.id}`}
          >
            Perbarui
          </Link>
        </span>
      </article>
    </Modal>
  );
};

export default DetailsModal;
