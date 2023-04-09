import React from "react";
import Toggle from "./Toggle";
import { useState, useEffect } from "react";
export default function Nav({ onToggleTheme, theme, totalFollowers }) {
  const [mouseOverToggle, setMouseOverToggle] = useState(false);

  useEffect(() => {
    function handleMouseOver(e) {
      const target = e.target.closest("#toggle");
      if (!target) {
        setMouseOverToggle(false);
        return;
      }
      setMouseOverToggle(true);
    }
    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);
  return (
    <nav className="">
      <div className="container  mx-auto px-4 md:p-0 md:flex md:justify-between">
        <div>
          <h1 className="text-blue-veryDarkText text-2xl font-bold dark:text-blue-lightGrayish">
            Social Media Dashboard
          </h1>
          <span className="text-blue-darkGrayish font-bold text-sm dark:text-blue-desaturated">
            Total Followers: {totalFollowers}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <div
            className={`text-sm font-bold text-blue-darkGrayish ${
              mouseOverToggle
                ? "dark:text-white"
                : " dark:text-blue-desaturated"
            }`}
          >
            Dark Mode
          </div>
          <Toggle onToggle={onToggleTheme} theme={theme} />
        </div>
        <hr className="my-5 text-blue-darkGrayish md:hidden dark:opacity-50" />
        <div className="flex justify-between items-center md:hidden">
          <div className="text-sm text-blue-darkGrayish font-bold dark:text-blue-desaturated">
            Dark Mode
          </div>
          <Toggle onToggle={onToggleTheme} theme={theme} />
        </div>
      </div>
    </nav>
  );
}
