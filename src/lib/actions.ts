"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const NotesSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  status: z.string(),
  authorId: z.string(),
});

// Save Action
export const saveNote = async (prevState: any, formData: FormData) => {
  const validatedFields = NotesSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.notes.create({
      data: {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
        status: validatedFields.data.status,
        authorId: validatedFields.data.authorId,
      },
    });
  } catch (error) {
    return { message: "Failed to create note" };
  }

  revalidatePath("/notes");
  redirect("/notes");
};

// Update Action
export const updateNote = async (
  id: string,
  prevState: any,
  formData: FormData
) => {
  const validatedFields = NotesSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.notes.update({
      data: {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
        status: validatedFields.data.status,
        authorId: validatedFields.data.authorId,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update note" };
  }

  revalidatePath("/notes");
  redirect("/notes");
};

// Delete Action
export const deleteNote = async (id: string, authorId: string) => {
  if (!authorId) {
    throw new Error(
      "Failed to delete note! User you don't have permission to delete this note."
    );
  }

  try {
    await prisma.notes.deleteMany({
      where: { AND: [{ authorId }, { id }] },
    });
  } catch (error) {
    return { message: "Failed to delete note" };
  }

  revalidatePath("/notes");
};
