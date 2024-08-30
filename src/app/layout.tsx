import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Viewport } from "next";
import LayoutClient from "./components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Digh",
  description: "Dighomi Social",
};

export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
