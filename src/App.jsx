import Socials from "./sections/Socials";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import OverView from "./sections/OverView";
import useLocalStorage from "./hooks/useLocalStorage";
const socialCards = [
  {
    platform: "facebook",
    username: "@nathanf",
    numOfFollowers: 1987,
    change: 12,
  },
  {
    platform: "twitter",
    username: "@nathanf",
    numOfFollowers: 1044,
    change: 99,
  },
  {
    platform: "instagram",
    username: "@realnathanf",
    numOfFollowers: 11000,
    change: 1099,
  },
  {
    platform: "youtube",
    username: "Nathan F.",
    numOfFollowers: 8239,
    change: -144,
  },
];
function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  function handleToggleTheme() {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="App font-body py-8 dark:bg-blue-veryDark min-h-full relative">
      <div className="lg:max-w-[1170px] lg:min-w-[1170px] lg:mx-auto">
        <Nav
          onToggleTheme={handleToggleTheme}
          theme={theme}
          totalFollowers={socialCards.reduce(
            (acc, { numOfFollowers }) => acc + numOfFollowers,
            0
          )}
        />
        <Socials socialCards={socialCards} />
        <OverView />
      </div>
      <footer className="absolute bottom-0 inset-x-0 bg-blue-veryPale dark:bg-blue-darkDesaturated text-blue-veryDark dark:text-white text-center">
        <p>
          &copy; <span>Mohamed Mostafa</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
