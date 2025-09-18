"use client";

import { useEffect, useState } from "react";
import "./styles.css";

export default function HomeHeroTextAnim() {
  const words = ["پیشرفته‌ ترین", "قدرتمندترین", "حرفه‌ای‌ ترین", "هوشمندترین"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <span
      className={`transition-text after:bg-base-100 after:border-green-600 after:border-l relative transition-opacity duration-300 ${
        fade ? "opacity-100" : "opacity-0"
      } text-success`}
    >
      {words[index]}
    </span>
  );
}
