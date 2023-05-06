/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      height: {
        "intro-page-height": "85vh",
      },
      screens: {
        tablet: "900px",
        "career-break": "700px",
      },
      fontSize: {
        mainText: "4rem",
        heading: "3.625rem",
        subText: "1.375rem",
        buttonText: "1.375rem",
        mobileHeading: "2rem",
        mobileMainText: "2.5rem",
        mobileSubText: "1rem",
      },
      colors: {
        primary: "#0A67C7",
        warn: "#FF9900",
        "primary-dark": "#003469",
        "footer-bg": "#00172F",
        "text-black": "#010101",
        "text-gray": "#6F6D71",
        "border-gray": "#CDCBCF",
        overlay: "rgba(0, 0, 0, 0.6)",
        modalBackground: "rgba(0, 0, 0, 0.89)",
      },
      gridTemplateColumns: {
        "expert-cols": "repeat(auto-fit,minmax(250px,1fr))",
        "careers-cols": "repeat(auto-fit,minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
