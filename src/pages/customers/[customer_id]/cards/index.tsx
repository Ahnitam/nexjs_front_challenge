import { CardsList } from "@/components/CardsList";
import { LinkButton } from "@/components/LinkButton";
import { useFetcherContext } from "@/providers/FetcherProvider";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import useSWR from "swr";

export default function Cards() {
  const { fetcher } = useFetcherContext();
  const { customer_id } = useRouter().query;
  const { data, error } = useSWR(
    "/customers/" + customer_id + "/cards",
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

  console.log(data, error);
  return (
    <div className="flex flex-col h-full max-h-full min-w-full w-max bg-gray-800 rounded-xl px-4 py-2 gap-4">
      <div className="flex justify-end">
        <LinkButton href={`/customers/${customer_id}`} color="green">
          <AiOutlineCreditCard className="text-white text-xl cursor-pointer" />
          <span>Adicionar Cartão</span>
        </LinkButton>
      </div>
      <div className="flex flex-col grow rounded-xl overflow-y-auto">
        <CardsList cards={data} customer_id={`${customer_id}`} />
      </div>
    </div>
  );
}
