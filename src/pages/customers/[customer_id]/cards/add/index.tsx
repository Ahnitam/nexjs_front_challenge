import { useNavigationContext } from "@/providers/NavigationProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CustomerAdd() {
  const router = useRouter();
  const { customer_id } = router.query;
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
        href: `/customers/${customer_id}/cards/add`,
        title: "Adicionar Cartão",
      },
    ]);
  }, [setNavigationRoutes, customer_id]);
  return (
    <div className="flex flex-col grow w-full items-center bg-gray-800 rounded-xl p-4 gap-4"></div>
  );
}
