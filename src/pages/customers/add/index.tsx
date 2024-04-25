import Link from "next/link";

export default function CustomerAdd() {
  return (
    <div className="flex flex-col h-full w-full items-start p-2 gap-2">
      <nav>
        <Link href="/" className="">
          Inicio
        </Link>
        <span> {">"} </span>
        <Link href="/customers" className="">
          Clientes
        </Link>
        <span> {">"} </span>
        <span className="font-bold">Adicionar Cliente</span>
      </nav>
      <div className="flex flex-col grow w-full items-center bg-gray-800 rounded-xl p-4 gap-4">
        <form className="flex flex-col gap-4 w-full">
          <label className="flex flex-col gap-1">
            <span className="font-bold">Nome</span>
            <input
              name="name"
              type="text"
              className="p-2 border border-gray-600 rounded-md bg-gray-700"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-bold">E-mail</span>
            <input
              name="email"
              type="email"
              className="p-2 border border-gray-600 rounded-md bg-gray-700"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-bold">Telefone</span>
            <input
              name="phone"
              type="tel"
              className="p-2 border border-gray-600 rounded-md bg-gray-700"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-bold">Data de Nascimento</span>
            <input
              name="birthday"
              type="date"
              className="p-2 border border-gray-600 rounded-md bg-gray-700"
            />
          </label>
          <button className="p-2 bg-green-600 text-white rounded-md">
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
}
