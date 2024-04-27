import { Error } from "@/components/Error";
import { useFetcherContext } from "@/providers/FetcherProvider";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { useEffect } from "react";

export default function User() {
  const { fetcher } = useFetcherContext();
  const { setNavigationRoutes } = useNavigationContext();
  useEffect(() => {
    setNavigationRoutes?.([
      {
        href: "/",
        title: "Inicio",
      },
      {
        href: "/user",
        title: "Usuário",
      },
    ]);
  }, [setNavigationRoutes]);
  return (
    <div className="flex flex-col min-w-full w-max bg-gray-800 rounded-xl px-4 py-8 gap-4 items-center">
      <Error message="Não implementado" />
    </div>
  );
}
