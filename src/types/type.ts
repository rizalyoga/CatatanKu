export interface CardProps {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  status: "waited" | "on-progress" | "done";
}
