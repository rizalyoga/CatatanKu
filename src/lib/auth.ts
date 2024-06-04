import { PrismaAdapter } from "@auth/prisma-adapter";
import GooleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { Adapter } from "next-auth/adapters";

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GooleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
