"use client";

import React, { MouseEventHandler, ReactNode, useRef } from "react";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const overlay = useRef(null);

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 "
      onClick={close}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-red-500 rounded-lg min-h-[400px] w-[700px]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
