"use client";

import React, { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReadyToType, setIsReadyToType] = useState(false); // Adiciona estado para delay inicial

  useEffect(() => {
    // Delay inicial de 0.5 segundos antes de começar a digitar
    const startDelay = setTimeout(() => setIsReadyToType(true), 500);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!isReadyToType) return;
    const word = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentText === word) {
          // Palavra completa, aguarde antes de começar a apagar
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && currentText === "") {
          // Palavra apagada, mude para a próxima palavra
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        } else {
          // Digitando ou apagando
          setCurrentText((prevText) =>
            isDeleting
              ? prevText.slice(0, -1)
              : word.slice(0, prevText.length + 1)
          );
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
    isReadyToType,
  ]);

  return (
    <div className="w-full text-center">
      <span className="min-w-full text-white text-4xl font-medium ">
        {currentText}
      </span>
      <span className="animate-blink text-accent text-4xl font-thin">|</span>
    </div>
  );
};

export default Typewriter;
