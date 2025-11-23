import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itzel's Log",
  description: "My Dev & Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}