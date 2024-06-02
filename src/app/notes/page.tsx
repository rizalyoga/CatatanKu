import React from "react";
import { getNotePages } from "@/lib/data";
import { Suspense } from "react";
import CreateButton from "@/components/buttons/CreateButton";
import Search from "@/components/search/Search";
import Pagination from "@/components/paginations/Pagination";
import NotesContent from "@/components/contents/NotesContents";
import ListNoteSkeleton from "@/components/skeleton/ListNoteSkeleton";
import FilterProgress from "@/components/selects/FilterProgress";

const NotesPage = async ({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
    progress?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const progress = searchParams?.progress || "";

  const totalPage = await getNotePages(query, progress);

  return (
    <section className="bg-blue-100 min-h-screen py-10 md:p-10 ">
      <div className="w-full px-2 md:mx-auto md:max-w-screen-xl">
        <h1 className="font-bold text-2xl mt-4 text-slate-700 md:text-3xl">
          Daftar Catatan
        </h1>
        <Search />
        <span className="flex justify-between items-center mb-5">
          <CreateButton />
          <FilterProgress />
        </span>
        <Suspense
          key={query + currentPage + progress}
          fallback={<ListNoteSkeleton />}
        >
          <NotesContent
            query={query}
            currentPage={currentPage}
            progress={progress}
          />
        </Suspense>
        <div className="flex justify-center items-center mt-6">
          <Pagination totalPages={totalPage} />
        </div>
      </div>
    </section>
  );
};

export default NotesPage;
