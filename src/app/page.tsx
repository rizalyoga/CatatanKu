import Link from "next/link";
import Image from "next/image";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <main className=" min-h-screen flex justify-center items-center flex-col bg-orange-100">
      <h1 className="text-blue-400 text-6xl text-center font-extrabold mb-5 tracking-tighter">
        Catatan<span className="text-[#FFD247]">Ku</span>
      </h1>
      <Image
        src={"/assets/note-task.svg"}
        width={240}
        height={240}
        alt="image"
      />
      {user?.name ? (
        <>
          <Link
            className="bg-blue-400 font-bold mt-4 px-14 py-4 rounded-full outline-1 border border-slate-100 text-white transform duration-300 hover:bg-blue-600 active:bg-blue-400"
            href={"/notes"}
          >
            Mulai Buat Catatan
          </Link>
          <Link
            className="bg-blue-400 font-bold mt-4 px-14 py-4 rounded-full outline-1 border border-slate-100 text-white transform duration-300 hover:bg-blue-600 active:bg-blue-400"
            href={"/api/auth/signout"}
          >
            Keluar
          </Link>
        </>
      ) : (
        <Link
          className="bg-blue-400 font-bold mt-4 px-14 py-4 rounded-full outline-1 border border-slate-100 text-white transform duration-300 hover:bg-blue-600 active:bg-blue-400"
          href={"/api/auth/signin"}
        >
          Mulai
        </Link>
      )}
    </main>
  );
}
