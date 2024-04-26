import { CustomerForm } from "@/components/CustomerForm";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { useEffect } from "react";

export default function CustomerAdd() {
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
        href: "/customers/add",
        title: "Adicionar Cliente",
      },
    ]);
  }, [setNavigationRoutes]);
  return (
    <div className="flex flex-col min-w-full w-max bg-gray-800 rounded-xl px-4 py-2 gap-4">
      <CustomerForm />
    </div>
  );
}
