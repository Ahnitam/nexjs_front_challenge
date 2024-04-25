import Link from "next/link";
import { ComponentProps } from "react";

interface ItemNavigationProps extends ComponentProps<typeof Link> {
  isCurrent?: boolean;
  title: string;
}

export function ItemNavigation({
  isCurrent,
  href,
  title,
  ...props
}: ItemNavigationProps) {
  return (
    <Link
      href={href}
      className={`flex items-center rounded-xl h-8 p-2 ${
        isCurrent ? "font-bold" : "bg-gray-800 hover:bg-gray-700"
      }`}
      {...props}
    >
      <span>{title}</span>
    </Link>
  );
}
