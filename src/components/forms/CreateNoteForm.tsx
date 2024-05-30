"use client";

import React from "react";
import clsx from "clsx";
import { saveNote } from "@/lib/actions";
import { useFormState } from "react-dom";

const CreateNoteForm = () => {
  const [state, formAction] = useFormState(saveNote, null);

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
          />
          <div id="content-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.content}</p>
          </div>

          <div className="flex justify-between items-center mt-4 border-t border-t-slate-200 pt-2">
            <select
              name="status"
              id="status"
              defaultValue={""}
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
                Waited
              </option>
              <option className="py-2" value="on-progress">
                On-Progress
              </option>
              <option className="py-2" value="done">
                Done
              </option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-500"
            >
              Create
            </button>
          </div>
          <div id="message-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.message}</p>
          </div>
        </div>
      </form>

      {/* <form action="">
        <div className="mt-4">
          <label
            htmlFor="title"
            className="block text-medium font-semibold text-slate-800"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className={clsx(
              "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5",
              "focus:ring-blue-400 focus:border-blue-500 focus:outline-blue-500 focus:ring-2"
            )}
            placeholder="Title note..."
            required
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="content"
            className="block text-medium font-semibold text-slate-800"
          >
            Content
          </label>
          <textarea
            name="content"
            id="contetnt"
            className={clsx(
              "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5",
              "focus:ring-blue-400 focus:border-blue-500 focus:outline-blue-500 focus:ring-2"
            )}
            placeholder="Note content..."
            required
          />
        </div>
        <button
          type="submit"
          className="text-white text-center text-sm w-full px-5 py-3 mt-4 font-medium rounded-md bg-blue-700 hover:bg-blue-800"
        >
          Save
        </button>
      </form> */}
    </>
  );
};

export default CreateNoteForm;
