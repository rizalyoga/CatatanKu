import React from "react";
import CreateNoteForm from "@/components/forms/CreateNoteForm";

const CreateNotePage = () => {
  return (
    <section className="bg-blue-100 py-10 min-h-screen ">
      <div className="w-full px-2 md:mx-auto md:max-w-screen-xl">
        <h1 className="font-bold text-slate-700 text-3xl mb-8 text-center">
          Membuat Catatan Baru
        </h1>
        <CreateNoteForm />
      </div>
    </section>
  );
};

export default CreateNotePage;
