import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";

const karlaMedium = localfont({
  src: "./fonts/Karla-Medium.ttf",
  weight: "500",
  variable: "--font-karlaMedium",
});
const karlaRegular = localfont({
  src: "./fonts/Karla-Regular.ttf",
  weight: "400",
  variable: "--font-karlaRegular",
});
const playfairRegular = localfont({
  src: "./fonts/Playfair-Regular.ttf",
  weight: "400",
  variable: "--font-playfairRegular",
});
export const metadata: Metadata = {
  title: "Belleza",
  description: "Women's Wellness Haven",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karlaMedium.variable} ${karlaRegular.variable} ${playfairRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
