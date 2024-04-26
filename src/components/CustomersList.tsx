import { TableItemLine } from "./TableItem/TableItemLine";

interface CustomersListProps {
  customers: any[];
}
export function CustomersList({ customers: customers }: CustomersListProps) {
  return (
    <table>
      <tbody>
        {customers?.map((customer: any) => (
          <TableItemLine
            key={customer.id}
            title={`${customer.name} (${customer.email})`}
            actions={[
              {
                href: `/customers/${customer.id}`,
                title: "Informações",
                color: "green",
              },
              {
                href: `/customers/${customer.id}/cards`,
                title: "Cartôes",
                color: "yellow",
              },
            ]}
          />
        ))}
      </tbody>
    </table>
  );
}
