import React from "react";
import clsx from "clsx";

const CardSkeleton = () => {
  return (
    <div
      className={clsx(
        "min-h-[190px] w-full p-4 relative bg-slate-100 flex flex-col justify-between h-full border border-slate-400 rounded-md cursor-pointer animate-pulse"
      )}
    >
      <div className="top-content">
        <span className="flex justify-between items-start">
          <div className=" bg-slate-300 h-6 w-[80%] rounded-md"></div>
          <span className="flex gap-3">
            <div className="h-6 w-6 rounded-md bg-slate-300"></div>
            <div className="h-6 w-6 rounded-md bg-slate-300"></div>
          </span>
        </span>
        <div className="bg-slate-300 h-20 rounded-md w-full mt-2"></div>
      </div>
      <div className="bottom-content flex justify-between items-center mt-2">
        <div className="bg-slate-300 rounded-md basis-[55%] h-6 w-full"></div>
        <div
          className={clsx("bg-slate-300 border rounded-full h-10 w-[120px]")}
        ></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
