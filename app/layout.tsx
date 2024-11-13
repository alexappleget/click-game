import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Click Game",
  description: "Choose a class, battle monsters, and level up.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
