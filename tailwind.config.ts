import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",    // app 폴더 경로 지정
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 피그마 디자인 배경색 (연한 아이보리)
        'custom-bg': '#FFFDF2', 
        // 태그 및 포인트 주황색
        'tag-orange': '#FF7A50',
      },
    },
  },
  plugins: [],
};
export default config;