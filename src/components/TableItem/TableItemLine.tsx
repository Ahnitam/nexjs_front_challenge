import { TableItemLineAction } from "./TableItemLineAction";

const colorList = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  yellow: "bg-yellow-600",
};

interface TableItemLineProps {
  title: string;
  actions: { href: string; title: string; color: keyof typeof colorList }[];
}
export function TableItemLine({ title, actions }: TableItemLineProps) {
  return (
    <tr className="hover:bg-gray-700">
      <td className="rounded-l-xl pl-4">
        <span className="grow font-bold text-ellipsis overflow-hidden inline text-nowrap">
          {title}
        </span>
      </td>
      <td className="rounded-r-xl pr-4">
        <div className="min-w-64 flex justify-end gap-2 py-2">
          {actions.map((action) => (
            <TableItemLineAction key={action.href} {...action} />
          ))}
        </div>
      </td>
    </tr>
  );
}
