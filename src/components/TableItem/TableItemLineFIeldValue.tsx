interface UserTableItemLineProps {
  field: string;
  value: string;
}
export function TableItemLineFIeldValue({
  field,
  value,
}: UserTableItemLineProps) {
  return (
    <tr className="hover:bg-gray-700">
      <td className="rounded-l-xl px-4">
        <span className="font-bold text-ellipsis overflow-hidden inline text-nowrap">
          {field}
        </span>
      </td>
      <td className="rounded-r-xl px-4">
        <span className="text-ellipsis overflow-hidden inline text-nowrap">
          {value}
        </span>
      </td>
    </tr>
  );
}
