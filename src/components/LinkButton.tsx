import Link from "next/link";

const colorList = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  yellow: "bg-yellow-600",
};
const colorHoverList = {
  blue: "hover:bg-blue-700",
  green: "hover:bg-green-700",
  yellow: "hover:bg-yellow-700",
};

export type colorListKeys = keyof typeof colorList;
interface LinkButtonProps {
  href: string;
  color?: colorListKeys;
  children: React.ReactNode;
}

export function LinkButton({ children, href, color }: LinkButtonProps) {
  return (
    <Link href={href}>
      <button
        className={`flex items-center gap-2 p-2 text-white rounded-lg ${
          colorList[color || "green"]
        } ${colorHoverList[color || "green"]}`}
      >
        {children}
      </button>
    </Link>
  );
}
