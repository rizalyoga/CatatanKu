import React from "react";
import { getNotes } from "@/lib/data";
import clsx from "clsx";

import CardNote from "@/components/cards/CardNote";
import CreateButton from "@/components/buttons/CreateButton";

const NotesPage = async () => {
  const notes = await getNotes();

  const setStatus = (status: string) => {
    switch (status) {
      case "waited":
        return "waited";
      case "on-progress":
        return "on-progress";
      case "done":
        return "done";
    }
  };

  return (
    <section className="bg-blue-100 min-h-screen p-10">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-xl mt-4 text-slate-700">Notes</h1>
        <CreateButton />

        <div
          className={clsx(
            "notes-container grid grid-cols-1 gap-6",
            "md:grid-cols-2",
            "xl:grid-cols-3"
          )}
        >
          {notes.reverse().map((note) => (
            <CardNote
              key={note.id}
              title={note.title}
              content={note.content}
              status={setStatus(note.status) ?? "waited"}
              createdAt={note.createdAt.toString()}
              updatedAt={note.updatedAt.toString()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotesPage;
