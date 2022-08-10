module.exports = {
  content: [
    "./dist/*",
    "./src/**/*.{html,js,ts, tsx}",
    "./src/components/**/*.{js,ts,tsx}",
  ],
  // content: ["./dist/*"],
  theme: {
    textColor: {
      black: "#000",
    },
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
