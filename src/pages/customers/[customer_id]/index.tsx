import { LinkButton } from "@/components/LinkButton";
import { Loading } from "@/components/Loading";
import { Error } from "@/components/Error";
import { useFetcherContext } from "@/providers/FetcherProvider";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import { CustomerInfo } from "@/components/CustomerInfo";

export default function Customer() {
  const { fetcher } = useFetcherContext();
  const { customer_id } = useRouter().query;
  const { data, error, isLoading } = useSWR(
    `/customers/${customer_id}`,
    fetcher || null
  );
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
    <div className="flex flex-col min-h-full min-w-full w-max bg-gray-800 rounded-xl px-4 py-8 gap-4 items-center">
      {isLoading || error ? (
        isLoading ? (
          <Loading />
        ) : (
          <Error message={error.message} />
        )
      ) : (
        <>
          <CustomerInfo customer={data} />
          <div className="flex gap-4">
            <LinkButton href={`/customers/${customer_id}/edit`} color="yellow">
              <span>Editar</span>
            </LinkButton>
            <LinkButton href={`/customers/${customer_id}/cards`} color="yellow">
              <span>Cartões</span>
            </LinkButton>
            <button className="p-2 hover:bg-red-700 bg-red-600 text-white rounded-md">
              Excluir
            </button>
          </div>
        </>
      )}
    </div>
  );
}
