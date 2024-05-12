import type { Metadata } from "next";
import {ReactNode} from "react";
import {Press_Start_2P} from "next/font/google";
import "../styles/globals.scss";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

const inter = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Legend of Odyssey",
  description: "Legend of Odyssey",
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
        <FooterComponent/>
      </body>
    </html>
  );
}
