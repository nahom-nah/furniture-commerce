module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: "#F67C2E",
        adminbg: "#F2F2F2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
