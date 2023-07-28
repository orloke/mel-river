import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

const JosefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mel River",
  description: "Built by Júnior Dering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={JosefinSans.className}>{children}</body>
    </html>
  );
}
