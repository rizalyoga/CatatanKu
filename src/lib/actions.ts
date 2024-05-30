"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const NotesSchema = z.object({
  title: z.string().min(3),
  content: z.string(),
  status: z.string(),
});

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
      },
    });
  } catch (error) {
    return { message: "Failed to create note" };
  }

  revalidatePath("/notes");
  redirect("/notes");
};
