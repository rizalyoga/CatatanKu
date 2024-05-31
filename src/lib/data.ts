import { prisma } from "@/lib/prisma";

export const getNotes = async () => {
  try {
    const notes = await prisma.notes.findMany();

    return notes;
  } catch (error) {
    throw new Error("Failed to fetch notes data !");
  }
};

export const getNoteById = async (id: string) => {
  try {
    const note = await prisma.notes.findUnique({
      where: { id },
    });

    return note;
  } catch (error) {
    throw new Error("Failed to fetch note data !");
  }
};
