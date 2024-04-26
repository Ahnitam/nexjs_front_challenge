import { useNavigationContext } from "@/providers/NavigationProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Card() {
  const { customer_id, card_id } = useRouter().query;
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
      {
        href: `/customers/${customer_id}/cards/${card_id}`,
        title: "Cartão",
      },
    ]);
  }, [setNavigationRoutes, customer_id, card_id]);
  return (
    <div className="flex flex-col grow w-full items-center bg-gray-800 rounded-xl p-4 gap-4"></div>
  );
}
