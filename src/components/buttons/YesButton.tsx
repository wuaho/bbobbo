"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface YesButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function YesButton({ children, onClick }: YesButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 duration-300 ease-in-out text-xl md:text-2xl"
    >
      {children}
    </button>
  );
}
