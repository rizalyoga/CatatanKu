import React from "react";
import clsx from "clsx";

const FormSkeleton = () => {
  return (
    <div className=" bg-white w-full rounded-md p-6 mt-6 animate-pulse">
      <div className="flex flex-col rounded-md p-2">
        <div className="w-full h-10 bg-slate-300 rounded-md" />

        <div className="w-full h-[18em] bg-slate-300 rounded-md mt-2"></div>

        <div className="flex justify-between items-center flex-wrap mt-4 border-t border-t-slate-200 pt-2">
          <div className="mt-2 h-10 bg-slate-300 w-[8em] rounded-md"></div>
          <div className="mt-2 h-10 bg-slate-300 w-[6em] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default FormSkeleton;
