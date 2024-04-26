import { AiOutlineUser } from "react-icons/ai";
import { TableItemLineFIeldValue } from "./TableItem/TableItemLineFIeldValue";

interface CustomerInfoProps {
  customer: any;
}

export function CustomerInfo({ customer }: CustomerInfoProps) {
  return (
    <>
      <AiOutlineUser className="text-white text-8xl" />
      <table className="min-w-min">
        <tbody>
          <TableItemLineFIeldValue field="ID" value={customer.id} />
          <TableItemLineFIeldValue field="Nome" value={customer.name} />
          <TableItemLineFIeldValue field="Email" value={customer.email} />
          <TableItemLineFIeldValue field="Telefone" value={customer.phone} />
          <TableItemLineFIeldValue
            field="Data de Nascimento"
            value={customer.birthday}
          />
        </tbody>
      </table>
    </>
  );
}
