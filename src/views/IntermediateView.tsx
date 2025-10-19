"use client";
import Image from "next/image";

interface IntermediateViewProps {
  onYesClick: () => void;
}

export default function IntermediateView({
  onYesClick,
}: IntermediateViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-pink-500 mb-8 text-center drop-shadow-sm">
        진짜?
        <span className="block text-xl md:text-2xl font-medium mt-2 text-gray-600">
          (¿De verdad? 😳)
        </span>
      </h1>

      {}
      <Image
        src="/cute-cat.gif"
        alt="A cute cat confirming a question"
        width={256}
        height={256}
        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-xl mb-12 border-4 border-pink-300"
        unoptimized
      />

      <button
        onClick={onYesClick}
        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition transform hover:scale-105 duration-300 ease-in-out text-2xl"
      >
        웅! (Si!)
      </button>
    </div>
  );
}
