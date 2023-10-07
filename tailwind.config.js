/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumslateblue: "#5d5fef",
        black: "#000",
        gainsboro: "#d9d9d9",
        gray: {
          "100": "#1e1e1e",
          "200": "rgba(0, 0, 0, 0.52)",
          "300": "rgba(0, 0, 0, 0.45)",
        },
        lavender: "#e8ecf9",
        cornflowerblue: "#b0b1f6",
        mediumpurple: "#7172cb",
      },
      spacing: {},
      fontFamily: {
        "bricolage-grotesque": "'Bricolage Grotesque'",
        "bricolage-grotesque-18pt": "'Bricolage Grotesque 18pt'",
      },
      borderRadius: {
        "12xs": "1px",
        "8xs": "5px",
        "10xs": "3px",
        "3xs": "10px",
      },
    },
    fontSize: {
      smi: "13px",
      sm: "14px",
      "17xl": "36px",
      "5xl": "24px",
      "13xl-9": "32.9px",
      "13xl": "32px",
      mini: "15px",
      base: "16px",
      "smi-8": "12.8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
