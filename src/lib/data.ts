import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE = 6;

export const getNotes = async (
  query: string,
  currentPage: number,
  progress: string
) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const notes = await prisma.notes.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        AND: [
          {
            OR: [
              {
                title: {
                  contains: query,
                  mode: "insensitive",
                },
              },
              {
                content: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            ],
          },
          {
            OR: [
              {
                status: {
                  contains: progress,
                  mode: "insensitive",
                },
              },
            ],
          },
        ],
      },
      orderBy: {
        updatedAt: "desc", // Mengurutkan berdasarkan createdAt dari yang terbaru ke yang terlama
      },
    });

    return notes;
  } catch (error) {
    throw new Error("Failed to fetch notes data !");
  }
};

export const getNotePages = async (query: string, progress: string) => {
  try {
    const notes = await prisma.notes.count({
      where: {
        AND: [
          {
            OR: [
              {
                title: {
                  contains: query,
                  mode: "insensitive",
                },
              },
              {
                content: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            ],
          },
          {
            OR: [
              {
                status: {
                  contains: progress,
                  mode: "insensitive",
                },
              },
            ],
          },
        ],
      },
    });

    const totalPage = Math.ceil(Number(notes) / ITEMS_PER_PAGE);

    return totalPage;
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
    console.log(error);
    throw new Error("Failed to fetch note data !");
  }
};
