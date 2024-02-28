import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      }
      ,
      colors: {
        "mainRed": "#D53D43",
        "mainWhite": "#FFFFFF",
        "mainBlack": "#000000",
        "mainGray": "#666666",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "360px", //min-width: 640px
      md: "769px", //min-width: 768px
      lg: "1024px", //min-width: 1024px
    },
    fontFamily: {
      Pretendard: ["Pretendard"], //Safari 폰트 적용 안됨 이슈 
      GangwonEduPower: ["GangwonEduPower"],
    },

  },
  plugins: [],
};
export default config;
