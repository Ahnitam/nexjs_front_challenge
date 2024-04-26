import Link from "next/link";
import useSWR from "swr";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useFetcherContext } from "@/providers/FetcherProvider";
import { useEffect } from "react";
import { useNavigationContext } from "@/providers/NavigationProvider";

export default function Customers() {
  const { fetcher } = useFetcherContext();
  const { data, error } = useSWR("/customers", fetcher || null);
  const { setNavigationRoutes } = useNavigationContext();
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
    ]);
  }, [setNavigationRoutes]);

  return (
    <div className="flex flex-col h-full min-w-full w-max bg-gray-800 rounded-xl px-4 py-2 gap-4">
      <div className="flex items-center justify-between">
        <label className="font-bold text-nowrap">
          Buscar por nome:
          <input
            name="search"
            type="text"
            className="mx-2 w-96 p-1 border border-gray-600 rounded-md bg-gray-700"
          />
        </label>
        <Link href="/customers/add">
          <button className="flex items-center gap-2 p-2 bg-green-600 hover:bg-green-700 text-white rounded-md">
            <AiOutlineUserAdd className="text-white text-xl cursor-pointer" />
            <span>Adicionar Cliente</span>
          </button>
        </Link>
      </div>
      <div className="flex flex-col w-full rounded-xl">
        <table>
          <tbody>
            {data?.map((customer: any) => (
              <tr key={customer.id} className="hover:bg-gray-700">
                <td className="rounded-l-xl pl-4">
                  <span className="grow font-bold text-ellipsis overflow-hidden inline text-nowrap">
                    {customer.name} ({customer.email})
                  </span>
                </td>
                <td className="rounded-r-xl pr-4">
                  <div className="min-w-64 flex justify-end gap-2">
                    <Link href={`/customers/${customer.id}`}>
                      <button className="p-2 bg-green-600 text-white rounded-md">
                        Informações
                      </button>
                    </Link>
                    <Link href={`/customers/${customer.id}/cards`}>
                      <button className="p-2 bg-yellow-600 text-white rounded-md">
                        Cartôes
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
