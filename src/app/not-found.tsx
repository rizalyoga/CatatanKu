"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className="min-h-screen flex justify-center items-center bg-orange-100">
      <h1 className="text-4xl font-bold text-slate-700">
        Opps, Sorry <span>Page Not Found</span> 🥲
      </h1>
    </section>
  );
};

export default NotFoundPage;
