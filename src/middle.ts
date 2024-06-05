// import { NextRequest, NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";

// // URL halaman login
// const loginPage = "/api/auth/signin";

// export async function middleware(request: NextRequest) {
//   // Mendapatkan sesi pengguna
//   const session = await getServerSession(authOptions);

//   // Jika sesi tidak ada, arahkan pengguna ke halaman login
//   if (!session) {
//     const url = request.nextUrl.clone();
//     url.pathname = loginPage;
//     return NextResponse.redirect(url);
//   }

//   // Jika sesi ada, izinkan akses ke halaman
//   return NextResponse.next();
// }

// // Konfigurasi middleware untuk hanya menjalankan pada route tertentu
// export const config = {
//   matcher: ["/notes/:path*"], // Gantilah dengan path yang ingin Anda lindungi
// };
