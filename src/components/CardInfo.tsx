import { AiFillCreditCard } from "react-icons/ai";
import { TableItemLineFIeldValue } from "./TableItem/TableItemLineFIeldValue";

interface CardInfoProps {
  card: any;
}

export function CardInfo({ card }: CardInfoProps) {
  return (
    <>
      <AiFillCreditCard className="text-white text-8xl" />
      <table className="min-w-min">
        <tbody>
          <TableItemLineFIeldValue field="Nome" value={card.name} />
          <TableItemLineFIeldValue field="Number" value={card.number} />
          <TableItemLineFIeldValue field="CVV" value={card.cvv} />
          <TableItemLineFIeldValue
            field="Expiration Date"
            value={card.expiration_date}
          />
        </tbody>
      </table>
    </>
  );
}
