import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                mainOrange: "#FF6000",
                lightOrange: "#FFA559",
                deepTeal: "#007F73",
                lightTeal: "#4CCD99",
                deepYellow: "#FFC700",
                darkBg: "#454545",
            },
        },
    },
    plugins: [],
};
export default config;
