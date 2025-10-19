"use client";

import NoButton from "@/components/buttons/NoButton";
import YesButton from "@/components/buttons/YesButton";

// Definimos los tipos de props (propiedades) que espera este componente
interface QuestionViewProps {
  onYesClick: () => void;
}

export default function QuestionView({ onYesClick }: QuestionViewProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-red-100 p-4 overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-8 text-center drop-shadow-lg">
        나랑 뽀뽀할래?
        <span className="block text-xl md:text-2xl font-medium mt-2 text-pink-500">
          (¿Quieres darme un besito? 🐮)
        </span>
      </h1>

      <div className="flex gap-8 mt-12 z-10">
        <YesButton onClick={onYesClick}> 웅! (Sip!) 🐷</YesButton>
        <NoButton> 아니 (Nop)</NoButton>
      </div>

      <p className="absolute bottom-4 text-gray-500 text-sm">
        ‘아니’를 한번 클릭해봐... 😉
      </p>
    </div>
  );
}
