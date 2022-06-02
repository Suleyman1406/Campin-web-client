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
        comeWithOpacity: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        comeWithScale: {
          "0%": {
            transform: "scale(0.7)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(5deg)",
          },
        },
        comeFromTop: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        comeFromRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(100%)",
          },
          "50%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        comeFromLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          "50%": {
            transform: "translateX(10%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        comeFromLeftTop: {
          "0%": {
            transform: "translate(-200px,-200px)",
            opacity: 0,
          },
          "50%": {
            transform: "translateY(50px)",
            opacity: 0.3,
          },
          "100%": {
            transform: "translate(0,0)",
            opacity: 1,
          },
        },
      },
      animation: {
        clipAnim1: "clipAnim1 1s ease-in-out",
        comeWithOpacity: "comeWithOpacity 1.5s ease-in-out",
        comeWithScale: "comeWithScale 1s ease-in-out",
        comeFromLeftTop: "comeFromLeftTop 0.9s ease-in-out",
        comeFromTop: "comeFromTop 0.9s ease-in-out",
        comeFromRight: "comeFromRight 0.9s ease-out",
        comeFromLeft: "comeFromLeft 0.9s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
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
