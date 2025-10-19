"use client";

import { useState, useCallback } from "react";

// Se define el ancho y alto del botón "No" para que el fantasma ocupe ese mismo espacio
const BUTTON_CLASSES =
  "bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-100 ease-out text-xl md:text-2xl";

export default function Home() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);
  const [isMoved, setIsMoved] = useState(false);

  // Función para mover el botón "No"
  const moveNoButton = useCallback(() => {
    // 1. Marca que el botón ya se movió (y ahora es Absoluto)
    if (!isMoved) {
      setIsMoved(true);
    }

    // 2. Calcula la nueva posición aleatoria (como antes)
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    setNoButtonPosition({ x: newX, y: newY });
  }, [isMoved]);

  const handleYesClick = () => {
    setShowMessage(true);
  };

  // --- Renderizado del mensaje final (sin cambios) ---
  if (showMessage) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-pink-700 text-4xl md:text-6xl font-bold text-center p-4">
        <p>¡Saranghaeyo! (사랑해요!) ❤️</p>
        <p className="mt-4 text-2xl md:text-3xl">
          ¡Sabía que dirías que sí! 🥰
        </p>
        <p className="mt-8">
          <span className="text-sm block">
            Para resetear, recarga la página.
          </span>
        </p>
      </div>
    );
  }

  // --- Renderizado de los botones ---
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-red-100 p-4 overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-8 text-center drop-shadow-lg">
        뽀뽀해줄래?
        <span className="block text-xl md:text-2xl font-medium mt-2 text-pink-500">
          (¿Quieres darme un beso?)
        </span>
      </h1>

      {/* Contenedor flex: mantiene ambos espacios fijos */}
      <div className="flex gap-8 mt-12 z-10">
        {/* Botón "Sí" (Siempre estable) */}
        <button
          onClick={handleYesClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 duration-300 ease-in-out text-xl md:text-2xl"
        >
          네! (Sí!)
        </button>

        {/* 💡 CONTENEDOR FANTASMA: Se muestra si el botón "No" se ha movido */}
        {isMoved && (
          <div className={`invisible ${BUTTON_CLASSES}`}>
            {/* Texto invisible que ocupa el mismo espacio que el botón real */}
            아니요 (No)
          </div>
        )}

        {/* Botón "No" */}
        <button
          onClick={moveNoButton}
          onMouseEnter={moveNoButton}
          // Clases Condicionales: Es relativo al inicio, absoluto al moverse.
          className={`${BUTTON_CLASSES} ${isMoved ? "absolute" : "relative"}`}
          // Estilos Condicionales: Solo aplica coordenadas si está movido (es decir, es absoluto)
          style={
            isMoved ? { left: noButtonPosition.x, top: noButtonPosition.y } : {}
          }
        >
          아니요 (No)
        </button>
      </div>

      <p className="absolute bottom-4 text-gray-500 text-sm">
        Intenta hacer clic en "아니요" si puedes... 😉
      </p>
    </div>
  );
}
