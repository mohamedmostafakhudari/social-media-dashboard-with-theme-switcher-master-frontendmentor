import classNames from "classnames";
import React from "react";

export default function Toggle({ onToggle, theme }) {
  const toggleBallClass = classNames(
    "bg-white w-4 h-4 top-1/2 -translate-y-1/2 absolute rounded-full duration-300 ease-in-out dark:bg-blue-veryDark1",
    {
      "right-[calc(100%-2px)] translate-x-full": theme == "dark",
      "right-1": theme == "light",
    }
  );
  return (
    <div
      onClick={onToggle}
      className="bg-toggle-light rounded-full w-11 h-[1.375rem] relative cursor-pointer duration-200 ease-in-out hover:bg-gradient-to-r hover:from-toggle-dark-grad1 hover:to-toggle-dark-grad2 dark:bg-gradient-to-r dark:from-toggle-dark-grad1 dark:to-toggle-dark-grad2"
    >
      <div className={toggleBallClass}></div>
    </div>
  );
}
