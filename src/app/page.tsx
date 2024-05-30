import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-200 min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-orange-400 text-4xl text-center font-bold mb-6">
        Catatan Saya
      </h1>
      <Link href={"/notes"}>
        <button className="bg-blue-400 font-semibold px-10 py-4 rounded-md outline-1 border border-slate-100 text-white transform duration-300 hover:bg-blue-600 active:bg-blue-400">
          Mulai
        </button>
      </Link>
    </main>
  );
}
