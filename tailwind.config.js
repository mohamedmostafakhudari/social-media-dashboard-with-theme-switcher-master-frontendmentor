/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      green: {
        lime: "hsl(163, 72%, 41%)",
      },
      red: {
        bright: "hsl(356, 69%, 56%)",
      },
      socials: {
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        instagramGrad1: "hsl(37, 97%, 70%)",
        instagramGrad2: "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
      },
      blue: {
        veryDark: "hsl(230, 17%, 14%)",
        veryDark1: "hsl(232, 19%, 15%)",
        darkDesaturated: "hsl(228, 28%, 20%)",
        desaturated: "hsl(228, 34%, 66%)",
        veryPale: "hsl(225, 100%, 98%)",
        lightGrayish: "hsl(227, 47%, 96%)",
        darkGrayish: "hsl(228, 12%, 44%)",
        veryDarkText: "hsl(230, 17%, 14%)",
      },
      toggle: {
        dark: {
          grad1: "hsl(210, 78%, 56%)",
          grad2: "hsl(146, 68%, 55%)",
        },
        light: "hsl(230, 22%, 74%)",
      },
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      body: ["'Inter'", "sans-serif"],
    },
  },
  plugins: [],
};
