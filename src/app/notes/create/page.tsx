import React from "react";
import CreateNoteForm from "@/components/forms/CreateNoteForm";

const CreateNotePage = () => {
  return (
    <section className="bg-blue-100 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="font-bold text-slate-700 text-3xl mb-8 text-center">
          Create New Note
        </h1>
        <CreateNoteForm />
      </div>
    </section>
  );
};

export default CreateNotePage;
