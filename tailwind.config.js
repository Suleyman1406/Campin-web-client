module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      zIndex: {
        5000: "5000",
      },
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
  plugins: [require("tailwind-scrollbar")],
};
