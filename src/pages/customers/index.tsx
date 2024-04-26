import useSWR from "swr";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useFetcherContext } from "@/providers/FetcherProvider";
import { useEffect } from "react";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { SearchInput } from "@/components/SearchInput";
import { CustomersList } from "@/components/CustomersList";
import { LinkButton } from "@/components/LinkButton";
import { NextRouter, useRouter } from "next/router";

function onUpdateSearch(router: NextRouter, value: string) {
  router.push({
    pathname: "/customers",
    query: { q: value },
  });
}

function getURLQuery(router: NextRouter) {
  return `/customers${
    router.query.q && router.query.q.length > 3 ? "?q=" + router.query.q : ""
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
          onChange={(value) => onUpdateSearch(router, value)}
        />
        <LinkButton href="/customers/add" color="green">
          <AiOutlineUserAdd className="text-white text-xl cursor-pointer" />
          <span>Adicionar Cliente</span>
        </LinkButton>
      </div>
      <div
        className={`flex flex-col grow rounded-xl overflow-y-auto ${
          isLoading ? "justify-center items-center" : "justify-start"
        }`}
      >
        {isLoading ? <p>Carregando...</p> : <CustomersList customers={data} />}
      </div>
    </div>
  );
}
