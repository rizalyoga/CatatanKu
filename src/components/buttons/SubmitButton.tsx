"use client";
import { useFormStatus } from "react-dom";
import clsx from "clsx";

const SubmitButtons = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "px-4 py-2 text-white font-semibold rounded-md bg-blue-500 ",
        "hover:bg-blue-600 ",
        "active:bg-blue-500",
        { "opacity-50 cursor-progress": pending }
      )}
    >
      {label == "save" ? (
        <span>{pending ? "Menyimpan..." : "Simpan"}</span>
      ) : (
        <span>{pending ? "Memperbarui..." : "Perbarui"}</span>
      )}
    </button>
  );
};

export default SubmitButtons;
