import React from "react";
import { getNotes } from "@/lib/data";
import clsx from "clsx";
import CardNote from "@/components/cards/CardNote";

interface NotesContentProps {
  query: string;
  progress: string;
  currentPage: number;
}

const NotesContent: React.FC<NotesContentProps> = async ({
  query,
  currentPage,
  progress,
}) => {
  const notes = await getNotes(query, currentPage, progress);

  const setStatus = (status: string) => {
    switch (status) {
      case "waited":
        return "waited";
      case "on-progress":
        return "on-progress";
      case "done":
        return "done";
      default:
        return "waited";
    }
  };

  return (
    <div
      className={clsx(
        "notes-container grid grid-cols-1 gap-4",
        "md:grid-cols-2",
        "xl:grid-cols-3"
      )}
    >
      {notes.map((note) => (
        <CardNote
          id={note.id}
          key={note.id}
          title={note.title}
          content={note.content}
          status={setStatus(note.status)}
          createdAt={note.createdAt.toString()}
          updatedAt={note.updatedAt.toString()}
        />
      ))}
    </div>
  );
};

export default NotesContent;
