import React from "react";
import { getNotePages } from "@/lib/data";
import { Suspense } from "react";
import CreateButton from "@/components/buttons/CreateButton";
import Search from "@/components/search/Search";
import Pagination from "@/components/paginations/Pagination";
import NotesContent from "@/components/contents/NotesContents";
import ListNoteSkeleton from "@/components/skeleton/ListNoteSkeleton";

const NotesPage = async ({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPage = await getNotePages(query);

  return (
    <section className="bg-blue-100 min-h-screen p-10">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-3xl mt-4 text-slate-700">
          Daftar Catatan
        </h1>
        <Search />
        <CreateButton />
        <Suspense key={query + currentPage} fallback={<ListNoteSkeleton />}>
          <NotesContent query={query} currentPage={currentPage} />
        </Suspense>
        <div className="flex justify-center items-center mt-6">
          <Pagination totalPages={totalPage} />
        </div>
      </div>
    </section>
  );
};

export default NotesPage;
