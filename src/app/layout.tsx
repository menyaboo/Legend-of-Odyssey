import type { Metadata } from "next";
import {ReactNode} from "react";
import {Press_Start_2P} from "next/font/google";
import "../styles/globals.scss";
import HeaderComponent from "@/components/header";

const inter = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Misguided World",
  description: "Misguided World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <HeaderComponent/>
        {children}
      </body>
    </html>
  );
}
