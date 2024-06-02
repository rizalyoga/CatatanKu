"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { updateNote } from "@/lib/actions";
import { useFormState } from "react-dom";
import type { Notes } from "@prisma/client";
import SubmitButtons from "../buttons/SubmitButton";
import FormSkeleton from "../skeleton/FormSkeleton";

import "react-quill/dist/quill.snow.css";
import { formats, modules } from "@/lib/utils";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const UpdateNoteForm = ({ note }: { note: Notes }) => {
  const updateNoteWithId = updateNote.bind(null, note.id);
  const [state, formAction] = useFormState(updateNoteWithId, null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: note.title,
    content: note.content,
    status: note.status,
  });

  const handleChange = (value: string) => {
    setFormData({
      ...formData,
      content: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("status", formData.status);

    try {
      await formAction(formDataToSend);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  };

  if (isSubmitting) {
    return (
      <div className="flex justify-center items-center">
        <FormSkeleton />
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className=" bg-white rounded-md p-6 mt-6">
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
            onChange={(e) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                title: e.target.value,
              }))
            }
            defaultValue={note.title}
          />
          <div id="title-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.title}</p>
          </div>
          {/* <textarea
            name="content"
            id="content"
            placeholder="Write your content..."
            className={clsx(
              "border-none mt-2 px-2 py-2 text-slate-600",
              "focus:border-none focus:outline-none"
            )}
            defaultValue={note.content}
            rows={10}
          /> */}
          <div id="content-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.content}</p>
          </div>

          <ReactQuill
            className="editor"
            modules={modules}
            formats={formats}
            onChange={handleChange}
            value={formData.content}
          />

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
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  status: e.target.value,
                }))
              }
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
            <SubmitButtons label="edit" isSubmitting={isSubmitting} />
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
