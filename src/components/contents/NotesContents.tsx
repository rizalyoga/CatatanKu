import React from "react";
import clsx from "clsx";
import CardNote from "@/components/cards/CardNote";
import { CardProps } from "@/types/type";
import { getNotes } from "@/lib/data";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/lib/session";

interface NotesContentProps {
  query: string;
  progress: string;
  currentPage: number;
}

const fetchNotes = async (
  query: string,
  currentPage: number,
  progress: string
) => {
  const res = await fetch(
    `/api/notes?query=${"percobaan"}&page=${1}&progress=${"done"}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch notes data");
  }
  return res.json();
};

const NotesContent: React.FC<NotesContentProps> = async ({
  query,
  currentPage,
  progress,
}) => {
  const user = await getCurrentUser();

  // const notes = await fetchNotes(query, currentPage, progress);
  const notes = await getNotes(query, currentPage, progress, user.id);
  // const notes = [];

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
      {notes?.map((note) => (
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
