import { usePaginationContext } from "@/providers/PaginationProvider";
import { useEffect } from "react";

export default function CustomerAdd() {
  const { setNavigationRoutes } = usePaginationContext();
  useEffect(() => {
    setNavigationRoutes?.([
      {
        href: "/",
        title: "Inicio",
      },
      {
        href: "/customers",
        title: "Clientes",
      },
      {
        href: "/customers/add",
        title: "Adicionar Cliente",
      },
    ]);
  }, [setNavigationRoutes]);
  return (
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
  );
}
