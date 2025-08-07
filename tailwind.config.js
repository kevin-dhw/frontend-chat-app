/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        100: "100px",
        10: "10px",
      },
      padding: {
        10: "10px",
      },
      flex: {
        2: 2,
        3: 3,
      },
      lineHeight: {
        100: "100px",
        200: "200px",
      },
      color: {
        textColor: "white",
      },
    },
  },
  plugins: [],
};
