/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        mainbg: "#8DBAFE",
        inputCol: "#4663BE",
        checking: "#E8F1FF",
      },
      // backgroundImage: {
      //   logInSvg: "url('/Amico.svg')",
      // },
    },
  },
  plugins: [],
};
