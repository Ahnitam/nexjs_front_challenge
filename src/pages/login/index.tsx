import { FormInput } from "@/components/FormInput";

export default function Login() {
  return (
    <div className="flex h-full min-h-full min-w-full w-max justify-center p-8">
      <div className="flex flex-col items-center justify-around h-full w-full sm:w-[36rem] min-w-96 bg-gray-800 rounded-lg">
        <h1 className="text-4xl font-bold">Faça Login!</h1>
        <form className="flex flex-col w-96 space-y-4 p-4">
          <FormInput type="email" placeholder="E-mail" />
          <FormInput type="password" placeholder="Senha" />
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
