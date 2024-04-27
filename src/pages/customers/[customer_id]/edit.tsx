import { Loading } from "@/components/Loading";
import { Error } from "@/components/Error";
import { useFetcherContext } from "@/providers/FetcherProvider";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import { CustomerForm } from "@/components/CustomerForm";

export default function Edit() {
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
      {
        href: `/customers/${customer_id}/edit`,
        title: "Editar Cliente",
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
        <CustomerForm customer={data} />
      )}
    </div>
  );
}
