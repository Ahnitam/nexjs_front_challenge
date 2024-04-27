import { FormInputWithLabel } from "@/components/FormInput";
import { signIn } from "next-auth/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface ILoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    signIn("credentials", {}, { email: data.email, password: data.password });
  };

  return (
    <div className="flex h-full min-h-full min-w-full w-max justify-center p-8">
      <div className="flex flex-col items-center justify-around h-full w-full sm:w-[36rem] min-w-96 bg-gray-800 rounded-lg">
        <h1 className="text-4xl font-bold">Faça Login!</h1>
        <form
          className="flex flex-col w-96 space-y-4 p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Senha é obrigatória",
              },
              minLength: {
                value: 6,
                message: "Senha deve ter no mínimo 6 caracteres",
              },
            }}
            render={({ field }) => (
              <FormInputWithLabel
                label="Senha"
                type="password"
                {...field}
                error={errors.password?.message}
              />
            )}
          />

          <button
            type="submit"
            className="p-2 bg-green-600 text-white rounded-md"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
