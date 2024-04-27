import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormInputWithLabel } from "./FormInput";

interface ICustomerForm {
  name: string;
  last_name: string;
  email: string;
  phone: string;
  birthday: string;
}

interface CustomerFormProps {
  user?: ICustomerForm;
}

export function CustomerForm({ user }: CustomerFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomerForm>({
    defaultValues: {
      name: user?.name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      birthday: user?.birthday || "",
    },
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<ICustomerForm> = (data) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
      onInvalid={(e) => console.log(e)}
    >
      <Controller
        name="name"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Nome é obrigatório",
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
        name="last_name"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Sobrenome é obrigatório",
          },
        }}
        render={({ field }) => (
          <FormInputWithLabel
            label="Sobrenome"
            {...field}
            error={errors.last_name?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Email é obrigatório",
          },
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Email inválido",
          },
        }}
        render={({ field }) => (
          <FormInputWithLabel
            label="Email"
            type="email"
            {...field}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Telefone é obrigatório",
          },
          pattern: {
            value: /^\(\d{2}\)\s\d\s\d{4}-\d{4}$/,
            message: "Telefone inválido",
          },
        }}
        render={({ field }) => (
          <FormInputWithLabel
            label="Telefone"
            type="tel"
            mask="(00) 0 0000-0000"
            {...field}
            error={errors.phone?.message}
          />
        )}
      />

      <Controller
        name="birthday"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Data de nascimento é obrigatória",
          },
        }}
        render={({ field }) => (
          <FormInputWithLabel
            label="Data de Nascimento"
            type="date"
            {...field}
            error={errors.birthday?.message}
          />
        )}
      />

      <button className="p-2 bg-green-600 text-white rounded-md">
        Adicionar
      </button>
    </form>
  );
}
