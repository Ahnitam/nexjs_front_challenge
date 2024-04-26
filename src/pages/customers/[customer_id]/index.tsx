import { useFetcherContext } from "@/providers/FetcherProvider";
import { useNavigationContext } from "@/providers/NavigationProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import useSWR from "swr";

export default function Customer() {
  const { fetcher } = useFetcherContext();
  const { customer_id } = useRouter().query;
  const { data, error } = useSWR(`/customers/${customer_id}`, fetcher || null);
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
      {
        href: `/customers/${customer_id}`,
        title: "Cliente",
      },
    ]);
  }, [setNavigationRoutes, customer_id]);
  return (
    <div className="flex flex-col grow w-full items-center bg-gray-800 rounded-xl p-4 gap-4">
      <AiOutlineUser className="text-white text-8xl" />
      <table className="min-w-min">
        <tbody>
          <tr>
            <th className="rounded-l-xl pl-4 text-start min-w-64">
              <span className="grow font-bold text-ellipsis overflow-hidden inline text-nowrap">
                ID
              </span>
            </th>
            <td className="rounded-r-xl pr-4">
              <span>{data?.id}</span>
            </td>
          </tr>
          <tr>
            <th className="rounded-l-xl pl-4 text-start">
              <span className="grow font-bold text-ellipsis overflow-hidden inline text-nowrap">
                E-mail
              </span>
            </th>
            <td className="rounded-r-xl pr-4">
              <span>{data?.email}</span>
            </td>
          </tr>
          <tr>
            <th className="rounded-l-xl pl-4 text-start">
              <span className="grow font-bold text-ellipsis overflow-hidden inline text-nowrap">
                Telefone
              </span>
            </th>
            <td className="rounded-r-xl pr-4">
              <span>{data?.phone}</span>
            </td>
          </tr>
          <tr>
            <th className="rounded-l-xl pl-4 text-start">
              <span className="grow font-bold text-ellipsis overflow-hidden inline text-nowrap">
                Data de Nascimento
              </span>
            </th>
            <td className="rounded-r-xl pr-4">
              <span>{data?.birthday}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-4">
        <Link href={`/customers/${customer_id}/cards`}>
          <button className="p-2 hover:bg-yellow-700 bg-yellow-600 text-white rounded-md">
            Cartões
          </button>
        </Link>
        <button className="p-2 hover:bg-green-700 bg-green-600 text-white rounded-md">
          Editar
        </button>
        <button className="p-2 hover:bg-red-700 bg-red-600 text-white rounded-md">
          Excluir
        </button>
      </div>
    </div>
  );
}
