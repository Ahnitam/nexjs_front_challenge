import { CardsList } from "@/components/CardsList";
import { LinkButton } from "@/components/LinkButton";
import { Loading } from "@/components/Loading";
import { Error } from "@/components/Error";
import { useFetcherContext } from "@/providers/FetcherProvider";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import useSWR from "swr";
import { SearchInput } from "@/components/SearchInput";
import { Pagination } from "@/components/Pagination";

function onUpdateSearch(router: NextRouter, value: string) {
  router.push({
    pathname: `/customers/${router.query.customer_id}/cards`,
    query: { q: value },
  });
}

function getURLQuery(router: NextRouter) {
  const { customer_id, q, page } = router.query;
  const isQueryValidation = q && q.length > 0;
  const isPageValidation = page && parseInt(page as string) > 0;
  return `/customers/${customer_id}/cards${
    isQueryValidation || isPageValidation ? "?" : ""
  }${isPageValidation ? `page=${page}` : ""}${
    isQueryValidation && isPageValidation ? "&" : ""
  }${isQueryValidation ? `q=${q}` : ""}`;
}

export default function Cards() {
  const router = useRouter();
  const { fetcher } = useFetcherContext();
  const { customer_id } = useRouter().query;
  const { data, error, isLoading } = useSWR(
    getURLQuery(router),
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
      {
        href: `/customers/${customer_id}/cards`,
        title: "Cartões",
      },
    ]);
  }, [setNavigationRoutes, customer_id]);

  return (
    <div className="flex flex-col h-full max-h-full min-w-full w-max bg-gray-800 rounded-xl px-4 py-2 gap-4">
      <div className="flex items-center justify-between">
        <SearchInput
          label="Buscar:"
          onChange={(value) => onUpdateSearch(router, value)}
        />
        {!isLoading && !error ? (
          <Pagination
            currentPage={data.current_page}
            totalPages={data.last_page}
            onPageChange={(page) => {
              router.push({
                pathname: `/customers/${customer_id}/cards`,
                query: { q: router.query.q, page },
              });
            }}
          />
        ) : null}
        <LinkButton href={`/customers/${customer_id}/cards/add`} color="green">
          <AiOutlineCreditCard className="text-white text-xl cursor-pointer" />
          <span>Adicionar Cartão</span>
        </LinkButton>
      </div>
      <div className="flex flex-col grow rounded-xl overflow-y-auto">
        {isLoading || error ? (
          isLoading ? (
            <Loading />
          ) : (
            <Error message={error.message} />
          )
        ) : (
          <CardsList cards={data.data} customer_id={`${customer_id}`} />
        )}
      </div>
    </div>
  );
}
