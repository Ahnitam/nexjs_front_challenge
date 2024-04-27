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
          <TableItemLineFIeldValue
            field="Sobrenome"
            value={customer.last_name}
          />
          <TableItemLineFIeldValue field="Email" value={customer.email} />
          <TableItemLineFIeldValue field="Telefone" value={customer.phone} />
          <TableItemLineFIeldValue
            field="Data de Nascimento"
            value={customer.birthday}
          />
          <TableItemLineFIeldValue
            field="Rua"
            value={customer.address?.street}
          />
          <TableItemLineFIeldValue
            field="Número"
            value={customer.address?.number}
          />
          <TableItemLineFIeldValue
            field="Bairro"
            value={customer.address?.district}
          />
          <TableItemLineFIeldValue
            field="Cidade"
            value={customer.address?.city}
          />
          <TableItemLineFIeldValue
            field="Estado"
            value={customer.address?.state}
          />
        </tbody>
      </table>
    </>
  );
}
