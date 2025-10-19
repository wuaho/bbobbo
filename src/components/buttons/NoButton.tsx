"use client";

import { useState, useCallback } from "react";

const angryEmojis = [
  "🙂",
  "😅",
  "😐",
  "🤨",
  "😠",
  "😡",
  "🤬",
  "😤",
  "😤",
  "😤",
  "😭",
];

interface NoButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NoButton({ children, onClick }: NoButtonProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isMoved, setIsMoved] = useState(false);
  const [angerLevel, setAngerLevel] = useState(0);

  const moveNoButton = useCallback(() => {
    if (!isMoved) {
      setIsMoved(true);
    }

    setAngerLevel((prevLevel) =>
      Math.min(prevLevel + 1, angryEmojis.length - 1)
    );

    let minX = -250;
    let maxX = 50;

    const minY = -400;
    const maxY = 300;

    const rangeX = maxX - minX; // Rango Total: 200 - (-600) = 800
    const rangeY = maxY - minY;

    // if (innerWidth >= 768) {
    //   maxRangeX = 400;
    //   maxRangeY = 250;
    // }

    const newX = Math.floor(Math.random() * rangeX) + minX;
    const newY = Math.floor(Math.random() * rangeY) + minY;

    setNoButtonPosition({ x: newX, y: newY });
  }, [isMoved]);

  return (
    <button
      onClick={moveNoButton}
      onMouseEnter={moveNoButton}
      className={
        "relative bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-out text-xl md:text-2xl"
      }
      style={
        isMoved
          ? {
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            }
          : {}
      }
    >
      {children} {angryEmojis[angerLevel]}
    </button>
  );
}
