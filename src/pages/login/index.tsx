import { FormInput } from "./components/FormInput";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-4xl font-bold">Faça Login!</h1>
      <form className="flex flex-col w-96 space-y-4">
        <FormInput type="email" placeholder="E-mail" />
        <FormInput type="password" placeholder="Senha" />
        <button
          type="submit"
          className="p-2 bg-green-600 text-white rounded-md"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
