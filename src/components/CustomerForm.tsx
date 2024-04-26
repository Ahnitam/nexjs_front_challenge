import { FormInputWithLabel } from "./FormInput";

export function CustomerForm() {
  return (
    <form className="flex flex-col gap-4 w-full">
      <FormInputWithLabel label="Nome" type="text" name="name" />
      <FormInputWithLabel label="Sobrenome" type="text" name="last_name" />
      <FormInputWithLabel label="E-mail" type="email" name="email" />
      <FormInputWithLabel label="Telefone" type="tel" name="phone" />
      <FormInputWithLabel
        label="Data de Nascimento"
        type="date"
        name="birthday"
      />
      <FormInputWithLabel label="Cep" type="text" name="zip_code" />

      <button className="p-2 bg-green-600 text-white rounded-md">
        Adicionar
      </button>
    </form>
  );
}
