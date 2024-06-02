import React from "react";
import { notFound } from "next/navigation";
import UpdateNoteForm from "@/components/forms/UpdateNoteForm";
import { getNoteById } from "@/lib/data";

const UpdateNotePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const note = await getNoteById(id);

  if (!note) {
    notFound();
  }

  return (
    <section className="bg-blue-100 py-10 min-h-screen">
      <div className="w-full px-2 md:mx-auto md:max-w-screen-xl">
        <h1 className="font-bold text-slate-700 text-xl mb-8 text-center md:text-3xl">
          Perbarui Catatan
        </h1>
        <UpdateNoteForm note={note} />
      </div>
    </section>
  );
};

export default UpdateNotePage;
