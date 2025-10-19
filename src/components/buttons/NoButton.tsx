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

    let minY = -400;
    let maxY = 300;

    if (window.innerWidth >= 768) {
      minX = -600;
      maxX = 450;
      minY = -250;
      maxY = 250;
    }

    const rangeX = maxX - minX;
    const rangeY = maxY - minY;

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
