import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormInputWithLabel } from "./FormInput";
import { useCallback } from "react";
import { NextRouter, useRouter } from "next/router";

interface ICustomerForm {
  name: string;
  last_name: string;
  email: string;
  phone: string;
  birthday: string;
  cep: string;
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
}

interface CustomerFormProps {
  user?: any;
}

async function onAdd(router: NextRouter, data: ICustomerForm) {
  console.log(data);
  const r = await fetch(`${process.env.API_URL}/customers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (r.status === 201) {
    alert("Cliente cadastrado com sucesso");
    router.push(`/customers`);
  } else {
    console.log(await r.json());
    alert("Falha ao cadastrar cliente");
  }
}

async function onUpdate(router: NextRouter, data: ICustomerForm) {
  const r = await fetch(
    `${process.env.API_URL}/customers/${router.query.customer_id}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (r.status === 200) {
    alert("Cliente atualizado com sucesso");
    router.push(`/customers/${router.query.customer_id}`);
  } else {
    console.log(r);
    alert("Falha ao atualizar cliente");
  }
}

export function CustomerForm({ user: customer }: CustomerFormProps) {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICustomerForm>({
    defaultValues: {
      name: customer?.name || "",
      last_name: customer?.last_name || "",
      email: customer?.email || "",
      phone: customer?.phone || "",
      birthday: customer?.birthday || "",
      cep: customer?.address?.cep || "",
      street: customer?.address?.street || "",
      number: customer?.address?.number || "",
      district: customer?.address?.district || "",
      city: customer?.address?.city || "",
      state: customer?.address?.state || "",
    },
    mode: "onChange",
  });
  const onSubmit = useCallback<SubmitHandler<ICustomerForm>>(
    (data) => {
      if (customer) {
        onUpdate(router, data);
      } else {
        onAdd(router, data);
      }
    },
    [customer, router]
  );

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
      <div className="flex gap-2">
        <Controller
          name="cep"
          control={control}
          rules={{
            required: {
              value: true,
              message: "CEP é obrigatório",
            },
            pattern: {
              value: /^\d{5}-\d{3}$/,
              message: "CEP inválido",
            },
            validate: {
              cep: async (value) => {
                const r = await fetch(
                  `https://viacep.com.br/ws/${value}/json/`
                );
                if (!r.ok) {
                  return "CEP não encontrado";
                }
                const data = await r.json();
                if (data.erro) {
                  return "CEP não encontrado";
                }
                setValue("street", data.logradouro);
                setValue("district", data.bairro);
                setValue("city", data.localidade);
                setValue("state", data.uf);
                return true;
              },
            },
          }}
          render={({ field }) => (
            <FormInputWithLabel
              label="CEP"
              mask="00000-000"
              {...field}
              error={errors.cep?.message}
            />
          )}
        />
        <Controller
          name="street"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Rua é obrigatória",
            },
          }}
          render={({ field }) => (
            <FormInputWithLabel
              label="Rua"
              disabled={true}
              {...field}
              error={errors.street?.message}
            />
          )}
        />
      </div>
      <div className="flex gap-2 w-full">
        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <FormInputWithLabel
              label="Número"
              type="number"
              {...field}
              error={errors.number?.message}
            />
          )}
        />
        <Controller
          name="district"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Bairro é obrigatório",
            },
          }}
          render={({ field }) => (
            <FormInputWithLabel
              label="Bairro"
              disabled={true}
              {...field}
              error={errors.district?.message}
            />
          )}
        />
      </div>
      <div className="flex gap-2 w-full">
        <Controller
          name="city"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Cidade é obrigatória",
            },
          }}
          render={({ field }) => (
            <FormInputWithLabel
              label="Cidade"
              disabled={true}
              type="text"
              {...field}
              error={errors.city?.message}
            />
          )}
        />
        <Controller
          name="state"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Estado é obrigatório",
            },
          }}
          render={({ field }) => (
            <FormInputWithLabel
              label="Estado"
              disabled={true}
              {...field}
              error={errors.state?.message}
            />
          )}
        />
      </div>

      <button className="p-2 bg-green-600 text-white rounded-md">
        {customer ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
}
