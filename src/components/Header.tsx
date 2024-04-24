import Link from "next/link";
import { ComponentProps } from "react";

interface HeaderProps extends ComponentProps<"header"> {}

export function Header(props: HeaderProps) {
  return (
    <header className="bg-green-800 h-12 flex flex-row">
      <nav className="h-full w-screen flex flex-row items-center justify-end px-4 gap-x-2">
        <Link href="/">Teste</Link>
        <Link href="/customers">Customers</Link>
      </nav>
    </header>
  );
}
