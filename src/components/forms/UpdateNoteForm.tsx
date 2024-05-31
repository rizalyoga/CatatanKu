"use client";

import React from "react";
import clsx from "clsx";
import { updateNote } from "@/lib/actions";
import { useFormState } from "react-dom";
import type { Notes } from "@prisma/client";
import SubmitButtons from "../buttons/SubmitButton";

const UpdateNoteForm = ({ note }: { note: Notes }) => {
  const updateNoteWithId = updateNote.bind(null, note.id);
  const [state, formAction] = useFormState(updateNoteWithId, null);

  return (
    <>
      <form action={formAction} className=" bg-white rounded-md p-6 mt-6">
        <div className="flex flex-col border border-slate-200 rounded-md p-2">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className={clsx(
              "text-slate-600 font-medium border-none text-lg px-2 py-2",
              "placeholder:font-semibold placeholder:text-xl",
              "focus:border-none focus:outline-none"
            )}
            defaultValue={note.title}
          />
          <div id="title-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.title}</p>
          </div>
          <textarea
            name="content"
            id="content"
            placeholder="Write your content..."
            className={clsx(
              "border-none mt-2 px-2 py-2 text-slate-600",
              "focus:border-none focus:outline-none"
            )}
            defaultValue={note.content}
            rows={10}
          />
          <div id="content-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.content}</p>
          </div>

          <div className="flex justify-between items-center flex-wrap mt-4 border-t border-t-slate-200 pt-2">
            <select
              name="status"
              id="status"
              defaultValue={note.status}
              required
              className={clsx(
                "bg-white px-3 py-2 border border-slate-200  text-slate-500 rounded-md appearance-none",
                "focus:outline-none"
              )}
            >
              <option className="font-medium" disabled={true} value="">
                🏷️ Progress
              </option>
              <option className="my-2" value="waited">
                ⌛ Waited
              </option>
              <option className="py-2" value="on-progress">
                🚀 On-Progress
              </option>
              <option className="py-2" value="done">
                ✅ Done
              </option>
            </select>
            <SubmitButtons label="edit" />
          </div>
          <div id="message-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.message}</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateNoteForm;
