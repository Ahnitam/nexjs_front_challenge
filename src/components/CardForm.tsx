import { FormInputWithLabel } from "./FormInput";

export function CardForm() {
  return (
    <form className="flex flex-col gap-4 w-full">
      <FormInputWithLabel label="Nome" type="text" name="name" />
      <FormInputWithLabel
        label="Número do Cartão"
        type="text"
        name="card_number"
      />
      <FormInputWithLabel
        label="Data de Validade"
        type="date"
        name="expiration_date"
      />
      <FormInputWithLabel label="CVV" type="text" name="cvv" />

      <button className="p-2 bg-green-600 text-white rounded-md">
        Adicionar
      </button>
    </form>
  );
}
