import Link from "next/link";
import type { ReactNode } from "react";

interface LinkBoxProps {
  href: string;
  children: ReactNode;
}

export default function LinkBox({ href, children }: LinkBoxProps) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-md border border-[--color-border] hover:border-[--color-accent] transition hover:bg-blue-100 active:bg-blue-100"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
