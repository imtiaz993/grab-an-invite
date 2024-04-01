/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B0560",
        secondary: "#1C85A4",
        dark: "#1D1D1D",
        compulsary: "#4E0163",
        overlay: "rgba(29, 29, 29, 0.4)",
        dark20: "#1D1D1D33",
      },
      backgroundImage: {
        "button-primary": "linear-gradient(180deg, #5A6BF2 0%, #2C40E9 100%)",
        "header-background": "url('./public/images/headerbackground.png')",
        time: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)",
        review: "linear-gradient(180deg, #F2F2F2 0%, #FFFFFF 100%)",
      },
      boxShadow: {
        time: "0px 4px 24px 0px #3297F71F",
        "blog-card": "0px 0px 24px 0px #0000001F",
        social: "0px 2px 11px 0px #0000002E",
      },
    },
  },
  plugins: [],
};
