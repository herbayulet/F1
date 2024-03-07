/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Formula1-Black", "Formula1-Regular-1", "Formula1-Wide"],
      body: ["Formula1-Bold-4", "Formula1-Wide", "Formula1-Regular-1"],
    },
  },
  plugins: [],
};
