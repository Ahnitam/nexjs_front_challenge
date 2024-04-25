import { PagesNavigation } from "@/components/PagesNavigation";
import { RouteNavigation } from "@/interfaces/RouteNavigation";
import { useRouter } from "next/router";

export default function CustomerAdd() {
  const router = useRouter();
  const { customer_id } = router.query;
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
    {
      href: `/customers/${customer_id}/cards/add`,
      title: "Adicionar Cartão",
    },
  ];
  return (
    <div className="flex flex-col h-full w-full items-start p-2 gap-2">
      <PagesNavigation routes={navigationRoutes} />
      <div className="flex flex-col grow w-full items-center bg-gray-800 rounded-xl p-4 gap-4"></div>
    </div>
  );
}
