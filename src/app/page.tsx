import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen flex justify-center items-center flex-col bg-orange-100">
      <h1 className="text-blue-400 text-6xl text-center font-extrabold mb-5 tracking-tighter">
        CatatanKu
      </h1>
      <Image
        src={"/assets/note-task.svg"}
        width={240}
        height={240}
        alt="image"
      />

      <Link href={"/notes"}>
        <button className="bg-blue-400 font-bold mt-4 px-14 py-4 rounded-full outline-1 border border-slate-100 text-white transform duration-300 hover:bg-blue-600 active:bg-blue-400">
          Mulai
        </button>
      </Link>
    </main>
  );
}
