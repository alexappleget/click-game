import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Click Game",
  description: "Choose a class, battle monsters, and level up.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <main>{children}</main>
    </html>
  );
};

export default RootLayout;
