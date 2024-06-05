"use client";

import { FC, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import Breadcrumb from "../breadcrumbs/Breadcrumbs";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProviders: FC<AuthProviderProps> = ({ children }) => {
  return (
    <SessionProvider>
      <Breadcrumb
        homeElement={"🏠"}
        separator={<span className="text-slate-400 -mt-[2.5px]"> / </span>}
        activeClasses="text-slate-500 mx-2 text-sm font-medium pointer-events-none"
        listClasses=" text-slate-500 hover:underline mx-2 text-sm font-medium"
        capitalizeLinks
      />
      {children}
    </SessionProvider>
  );
};

export default AuthProviders;
