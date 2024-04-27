import { TableItemLine } from "./TableItem/TableItemLine";

interface CardsListProps {
  customer_id: string;
  cards: any[];
}
export function CardsList({ cards, customer_id }: CardsListProps) {
  return (
    <table>
      <tbody>
        {cards?.map((card: any) => (
          <TableItemLine
            key={card.id}
            title={`${card.name} (${card.number})`}
            actions={[
              {
                href: `/customers/${customer_id}/cards/${card.id}`,
                title: "Informações",
                color: "green",
              },
            ]}
          />
        ))}
      </tbody>
    </table>
  );
}
