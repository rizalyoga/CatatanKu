import { FC, ReactNode } from "react";
import AuthProviders from "@/components/providers/AuthProviders";
import ProtectRoutetProvider from "@/components/providers/ProtecRouteProvder";
interface NotesLayoutProps {
  children: ReactNode;
}

const NotesLayout: FC<NotesLayoutProps> = ({ children }) => {
  return (
    <AuthProviders>
      <ProtectRoutetProvider>{children}</ProtectRoutetProvider>
    </AuthProviders>
  );
};

export default NotesLayout;
