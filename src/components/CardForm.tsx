import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormInputWithLabel } from "./FormInput";

interface ICardForm {
  name: string;
  number: string;
  cvv: string;
  expiration_date: string;
}

interface CardFormProps {
  card?: any;
}

export function CardForm({ card }: CardFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICardForm>({
    defaultValues: {
      name: card?.name || "",
      number: card?.number || "",
      cvv: card?.cvv.toString() || "",
      expiration_date: card?.expiration_date || "",
    },
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<ICardForm> = (data) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="name"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Nome é obrigatório",
          },
          minLength: {
            value: 3,
            message: "Nome deve ter no mínimo 3 caracteres",
          },
        }}
        render={({ field }) => (
          <FormInputWithLabel
            label="Nome"
            {...field}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        name="number"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Número do cartão é obrigatório",
          },
          pattern: {
            value: /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/,
            message: "Número do cartão inválido",
          },
        }}
        render={({ field }) => (
          <FormInputWithLabel
            label="Número do Cartão"
            mask="0000 0000 0000 0000"
            {...field}
            error={errors.number?.message}
          />
        )}
      />

      <Controller
        name="cvv"
        control={control}
        rules={{
          required: {
            value: true,
            message: "CVV é obrigatório",
          },
          validate: {
            value: (value) => value.length === 3 || "CVV inválido",
          },
        }}
        render={({ field }) => (
          <FormInputWithLabel
            label="CVV"
            type="text"
            mask="000"
            {...field}
            error={errors.cvv?.message}
          />
        )}
      />

      <Controller
        name="expiration_date"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Data de validade é obrigatória",
          },
        }}
        render={({ field }) => (
          <FormInputWithLabel
            label="Data de Validade"
            type="date"
            {...field}
            error={errors.expiration_date?.message}
          />
        )}
      />

      <button className="p-2 bg-green-600 text-white rounded-md">
        {card ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
}
