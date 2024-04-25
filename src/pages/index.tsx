import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full items-center justify-around p-12">
      <h1 className="text-4xl font-bold">Bem vindo</h1>
      <p className="text-lg">
        Este é um projeto de um desafio para demonstrar o uso de Next.js com
        TailwindCSS.
      </p>
      <p>Gerenciamento de Clientes com Cartão</p>
      <Link href="/customers">
        <button className="p-2 bg-green-600 text-white rounded-md">
          Acessar
        </button>
      </Link>
    </main>
  );
}
