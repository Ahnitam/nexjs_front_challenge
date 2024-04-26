import Link from "next/link";

interface CustomersListProps {
  customers: any[];
}
export function CustomersList({ customers: customers }: CustomersListProps) {
  return (
    <table>
      <tbody>
        {customers?.map((customer: any) => (
          <tr key={customer.id} className="hover:bg-gray-700">
            <td className="rounded-l-xl pl-4">
              <span className="grow font-bold text-ellipsis overflow-hidden inline text-nowrap">
                {customer.name} ({customer.email})
              </span>
            </td>
            <td className="rounded-r-xl pr-4">
              <div className="min-w-64 flex justify-end gap-2">
                <Link href={`/customers/${customer.id}`}>
                  <button className="p-2 bg-green-600 text-white rounded-md">
                    Informações
                  </button>
                </Link>
                <Link href={`/customers/${customer.id}/cards`}>
                  <button className="p-2 bg-yellow-600 text-white rounded-md">
                    Cartôes
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
