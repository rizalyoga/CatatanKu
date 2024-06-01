export const progressLabelStyle = (progress: string) => {
  switch (progress) {
    case "waited":
      return "bg-blue-400";
    case "on-progress":
      return "bg-orange-400";
    case "done":
      return "bg-green-400";
  }
};

export const progressLabelNameStyle = (progress: string) => {
  switch (progress) {
    case "waited":
      return "⏳  Waited";
    case "on-progress":
      return "🚀  On-Progress";
    case "done":
      return "✅  Done";
  }
};

export const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
];
