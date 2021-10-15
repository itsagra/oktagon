module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "25%": "25%",
    },
    theme: {
      height: {
        "25%": "25vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
