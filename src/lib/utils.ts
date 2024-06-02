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
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: ["white", "red", "yellow", "blue", "green", "black"] }],
    [{ background: ["white", "red", "yellow", "blue", "green", "black"] }],
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
  "color",
  "image",
  "background",
  "align",
  "size",
  "font",
];
