import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "21st Century Revival",
  description: "Soli Deo Gloria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
