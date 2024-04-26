import { PagesNavigation } from "@/components/PagesNavigation";
import { RouteNavigation } from "@/interfaces/RouteNavigation";
import { useFetcherContext } from "@/providers/FetcherProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineCreditCard } from "react-icons/ai";
import useSWR from "swr";

export default function Cards() {
  const { fetcher } = useFetcherContext();
  const { customer_id } = useRouter().query;
  const { data, error } = useSWR(
    "/customers/" + customer_id + "/cards",
    fetcher || null
  );
  const navigationRoutes: RouteNavigation[] = [
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
    {
      href: `/customers/${customer_id}/cards`,
      title: "Cartões",
    },
  ];

  console.log(data, error);
  return (
    <div className="flex flex-col h-full w-full items-start p-2 gap-2">
      <PagesNavigation routes={navigationRoutes} />
      <div className="flex flex-col grow w-full bg-gray-800 rounded-xl px-4 py-2 gap-4">
        <div className="flex justify-end">
          <Link href={`/customers/${customer_id}/cards/add`}>
            <button className="flex items-center gap-2 p-2 bg-green-600 hover:bg-green-700 text-white rounded-md">
              <AiOutlineCreditCard className="text-white text-xl cursor-pointer" />
              <span>Adicionar Cartão</span>
            </button>
          </Link>
        </div>
        <div className="flex flex-col w-full rounded-xl">
          <table>
            <tbody>
              {data?.map((card: any) => (
                <tr key={card.id} className="hover:bg-gray-700">
                  <td className="rounded-l-xl pl-4">
                    <span className="grow font-bold text-ellipsis overflow-hidden inline text-nowrap">
                      {card.number}
                    </span>
                  </td>
                  <td className="rounded-r-xl pr-4">
                    <div className="min-w-64 flex justify-end gap-2">
                      <Link href={`/customers/${customer_id}/cards/${card.id}`}>
                        <button className="p-2 bg-green-600 text-white rounded-md">
                          Informações
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
    </div>
  );
}
