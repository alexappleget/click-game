import Link from "next/link";
import React from "react";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const LinkCustom = ({ children, href }: LinkProps) => {
  return (
    <Link
      className="p-4 px-8 py-2 overflow-hidden text-black bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-600 rounded-lg shadow-lg group hover:scale-105 transform transition-all duration-300 ease-in-out"
      href={href}
      passHref
    >
      {children}
    </Link>
  );
};

export { LinkCustom };
