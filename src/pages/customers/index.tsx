import useSWR from "swr";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useFetcherContext } from "@/providers/FetcherProvider";
import { useEffect } from "react";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { SearchInput } from "@/components/SearchInput";
import { CustomersList } from "@/components/CustomersList";
import { LinkButton } from "@/components/LinkButton";
import { NextRouter, useRouter } from "next/router";
import { Pagination } from "@/components/Pagination";

function onUpdateSearch(router: NextRouter, value: string) {
  router.push({
    pathname: "/customers",
    query: { q: value },
  });
}

function getURLQuery(router: NextRouter) {
  const { q, page } = router.query;
  const isQueryValidation = q && q.length > 0;
  const isPageValidation = page && parseInt(page as string) > 0;
  console.log("isQueryValidation", isQueryValidation);
  return `/customers${isQueryValidation || isPageValidation ? "?" : ""}${
    isPageValidation ? `page=${page}` : ""
  }${isQueryValidation && isPageValidation ? "&" : ""}${
    isQueryValidation ? `q=${q}` : ""
  }`;
}

export default function Customers() {
  const router = useRouter();
  const { fetcher } = useFetcherContext();
  const { data, error, isLoading } = useSWR(
    getURLQuery(router),
    fetcher || null,
    { errorRetryCount: 0 }
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
    ]);
    return () => {
      setNavigationRoutes?.([]);
    };
  }, [setNavigationRoutes]);

  return (
    <div className="flex flex-col h-full max-h-full min-w-full w-max bg-gray-800 rounded-xl px-4 py-2 gap-4">
      <div className="flex items-center justify-between">
        <SearchInput
          label="Buscar por nome:"
          value={router.query.q as string}
          onChange={(value) => onUpdateSearch(router, value)}
        />
        {!isLoading && !error ? (
          <Pagination
            currentPage={data.current_page}
            totalPages={data.last_page}
            onPageChange={(page) => {
              router.push({
                pathname: "/customers",
                query: { q: router.query.q, page },
              });
            }}
          />
        ) : null}

        <LinkButton href="/customers/add" color="green">
          <AiOutlineUserAdd className="text-white text-xl cursor-pointer" />
          <span>Adicionar Cliente</span>
        </LinkButton>
      </div>
      <div
        className={`flex flex-col grow rounded-xl overflow-y-auto ${
          isLoading || error ? "justify-center items-center" : "justify-start"
        }`}
      >
        {isLoading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <CustomersList customers={data.data} />
        )}
      </div>
    </div>
  );
}
