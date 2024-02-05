import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    fontFamily: {
      Pretendard: ["Pretendard"], //Safari 폰트 적용 안됨 이슈 
      GangwonEduPower: ["GangwonEduPower"],
    },

  },
  plugins: [],
};
export default config;
