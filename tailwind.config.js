/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: { inter: "Inter", "roc-grotesk": "Roc Grotesk" } },
    colors: {
      gray: {
        100: "#adadad",
        200: "#a7adb3",
        300: "#202125",
        400: "#16181a",
        500: "#0e0f10",
        600: "rgba(255, 255, 255, 0.55)",
      },
      white: "#fff",
    },
    fontSize: { sm: "12px", base: "16px", lg: "20px", xl: "40px" },
    screens: {
      lg: { max: "1200px" },
      md: { max: "768px" },
      sm: { max: "428px" },
    },
  },
  corePlugins: { preflight: false },
};
