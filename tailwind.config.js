module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        campgreen: "#84cc16",
      },
      backgroundImage: {
        searchImage: "url('/public/images/home-bg.jpg')",
      },
    },
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
      logo: ["Macondo", "cursive"],
    },
  },
  plugins: [],
};
