/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: { max: "425px" },
        tablet: { max: "768px" },
        mdTablet: { max: "1080px" },
        desktop: { max: "1366px" },
        mdDesktop: { max: "1560px" },
        lgDesktop: { max: "1920px" },
      },
    },
  },
  plugins: [],
};
