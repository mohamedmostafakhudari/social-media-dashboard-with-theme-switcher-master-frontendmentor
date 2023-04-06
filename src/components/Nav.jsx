import React from "react";
import Toggle from "./Toggle";
export default function Nav({ onToggleTheme, theme }) {
  return (
    <nav className="md:flex md:justify-between bg-blue-veryPale dark:bg-blue-veryDark1">
      <div>
        <h1 className="text-blue-veryDarkText text-2xl font-bold dark:text-blue-lightGrayish">
          Social Media Dashboard
        </h1>
        <span className="text-blue-darkGrayish font-bold text-sm dark:text-blue-desaturated">
          Total Followers: 23,004
        </span>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <div className="text-sm text-blue-darkGrayish font-bold dark:text-blue-desaturated">
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
    </nav>
  );
}
