import { useState, useEffect } from "react";
import Nav from "./components/Nav";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  function handleToggleTheme() {
    setDarkMode((prev) => !prev);
  }
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="App font-body py-8 dark:bg-blue-veryDark">
      <div className="container mx-auto px-4 md:p-0">
        <Nav
          onToggleTheme={handleToggleTheme}
          theme={darkMode == true ? "dark" : "light"}
        />
      </div>
    </div>
  );
}

export default App;
