import { prisma } from "@/lib/prisma";

export const getNotes = async () => {
  try {
    const notes = await prisma.notes.findMany();

    return notes;
  } catch (error) {
    throw new Error("Failed to fetch notes data !");
  }
};
