"use client";

import { useFormStatus } from "react-dom";
import clsx from "clsx";

const SubmitButtons = ({
  label,
  isSubmitting,
}: {
  label: string;
  isSubmitting: boolean;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={clsx(
        "px-4 py-2 pt-2.5 text-white font-semibold rounded-md bg-blue-500 ",
        "hover:bg-blue-600 ",
        "active:bg-blue-500",
        {
          "opacity-50 cursor-progress bg-slate-100 text-slate-700":
            isSubmitting,
        }
      )}
    >
      {label == "save" ? (
        <span>{isSubmitting ? "Menyimpan..." : "Simpan"}</span>
      ) : (
        <span>{isSubmitting ? "Memperbarui..." : "Perbarui"}</span>
      )}
    </button>
  );
};

export default SubmitButtons;
