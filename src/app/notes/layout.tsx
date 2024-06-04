import { FC, ReactNode } from "react";
import AuthProviders from "@/components/providers/AuthProviders";

interface NotesLayoutProps {
  children: ReactNode;
}

const NotesLayout: FC<NotesLayoutProps> = ({ children }) => {
  return <AuthProviders>{children}</AuthProviders>;
};

export default NotesLayout;
