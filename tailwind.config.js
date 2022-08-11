module.exports = {
  content: [
    "./dist/*",
    "./src/**/*.{html,js,ts, tsx}",
    "./src/components/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "black-brand": "#252125",
        "primary-text": "#252125",
      },
    },
  },
  plugins: [],
};
