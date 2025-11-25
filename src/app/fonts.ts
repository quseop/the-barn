import localFont from "next/font/local";

export const clashDisplay = localFont({
    src: [
        {
            path: "./fonts/clash/ClashDisplay-Variable.woff2",
            weight: "200 700",
            style: "normal",
        },
    ],
    variable: "--font-clash-display",
});

export const dancingScript = localFont({
    src: [
        {
            path: "./fonts/dancing/DancingScript-Variable.woff2",
            weight: "200 700",
            style: "normal",
        },
    ],
    variable: "--font-dancing-script",
});
