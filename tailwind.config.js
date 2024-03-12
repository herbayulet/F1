/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      fblack: "Formula1-Black",
      fregular: "Formula1-Regular-1",
      fwide: "Formula1-Wide",
      fbold: "Formula1-Bold-4",
    },
  },
  plugins: [],
};
