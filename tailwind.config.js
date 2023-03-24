/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#F7F9FC",
          100: "#EDF1F7",
          200: "#C0CAD8",
          300: "#A3B0C2",
          400: "#8A96A8",
          500: "#6F7D90",
          600: "#546278",
          700: "#394760",
          800: "#242E42",
          900: "#0F1424",
        },
        bluepb: {
          50: "#F5FBFF",
          100: "#D4E8F7",
          200: "#A1D3F7",
          300: "#71BDF4",
          400: "#38A9FA",
          500: "#0095FF",
          600: "#0A72C2",
          700: "#045FAE",
          800: "#044F95",
          900: "#003366",
        },
      },
      backgroundImage: {
        'stacked-waves': "url('../img/stacked-waves-haikei.svg')",
      },
    },
  },
  plugins: [],
};
