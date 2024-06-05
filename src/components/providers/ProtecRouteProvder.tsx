import { FC, ReactNode } from "react";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

interface ProtectProviderProps {
  children: ReactNode;
}

const ProtectRoutetProvider: FC<ProtectProviderProps> = async ({
  children,
}) => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  return <>{children}</>;
};

export default ProtectRoutetProvider;
