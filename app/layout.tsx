import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itzel's Log",
  description: "Itzel's Blog - Study and Projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
