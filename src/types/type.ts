export interface CardProps {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  status: "waited" | "on-progress" | "done";
}
