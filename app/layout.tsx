import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ECE Preschool Interest List",
  description: "Track and manage ECE preschool interest list surveys",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" data-theme="forest">
      <AuthProvider>
        <body className={`${inter.className}`}>{children}</body>
      </AuthProvider>
    </html>
  );
}
