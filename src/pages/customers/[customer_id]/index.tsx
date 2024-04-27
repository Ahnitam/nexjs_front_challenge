import { LinkButton } from "@/components/LinkButton";
import { Loading } from "@/components/Loading";
import { Error } from "@/components/Error";
import { useFetcherContext } from "@/providers/FetcherProvider";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import { CustomerInfo } from "@/components/CustomerInfo";

async function onDelete(router: NextRouter) {
  const r = await fetch(
    `${process.env.API_URL}/customers/${router.query.customer_id}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  if (r.status === 200) {
    alert("Cliente excluído com sucesso");
    router.push(`/customers`);
  } else {
    alert("Falha ao excluir cliente");
  }
}

export default function Customer() {
  const { fetcher } = useFetcherContext();
  const router = useRouter();
  const { customer_id } = router.query;
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
            <button
              className="p-2 hover:bg-red-700 bg-red-600 text-white rounded-md"
              onClick={() => onDelete(router)}
            >
              Excluir
            </button>
          </div>
        </>
      )}
    </div>
  );
}
