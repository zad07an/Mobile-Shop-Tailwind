/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "412px",
      md: "768px",
      lg: "1024px",
      xl_1210: "1210px",
      xl_1300: "1300px"
    },
    fontFamily: {
      sans: [
        ['"Open Sans"', "sans-serif"],
        // {
        //   fontFeatureSettings: '"cv11", "ss01"',
        //   fontVariationSettings: '"opsz" 32',
        // },
      ],
      // body: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        customBlue: {
          100: "#2196f3",
          500: "#0017eb",
        },
      },
    },
  },
  plugins: [],
};
