module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      keyframes: {
        clipAnim1: {
          "0%": {
            clipPath: "circle(18.6% at 50% 26%)",
          },

          "100%": {
            clipPath: "circle(89.8% at 50% 26%)",
          },
        },
      },
      animation: {
        clipAnim1: "clipAnim1 1s ease-in-out",
        comeFromTop: "comeFromTop 0.7s ease-out",
      },
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
  plugins: [],
};
