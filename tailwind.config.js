/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "360px",
      md: "480px",
      lg: "768px",
      xl: "1280px",
    },
    fontSize: {
      sm: "0.65rem",
      base: "0.8rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",

    },
    extend: {
      maxHeight: {
        "128": "13rem",
      },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7648FA",
          secondary: "#F4F0FF",
          accent: "#DDE1EB",
          neutral: "#2a323c",
          "base-100": "#ffffff",
          info: "#adadad",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#ff0000",
        },
      },
    ],
  },
};
