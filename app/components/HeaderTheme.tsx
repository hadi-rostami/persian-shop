"use client";

import { useEffect, useState } from "react";
import { PiMoonLight } from "react-icons/pi";
import { CiLight } from "react-icons/ci";

export default function HeaderTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return (saved as "light" | "dark") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        value="dark"
        checked={theme === "dark"}
        className="theme-controller"
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
      <CiLight className={`swap-on md:h-7 h-6 md:w-7 w-6 fill-current`} />
      <PiMoonLight className={`swap-off md:h-6 h-5 md:w-6 w-5 fill-current`} />
    </label>
  );
}
