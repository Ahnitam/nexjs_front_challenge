import { Error } from "@/components/Error";
import { LinkButton } from "@/components/LinkButton";
import { Loading } from "@/components/Loading";
import { UserInfo } from "@/components/UserInfo";
import { useFetcherContext } from "@/providers/FetcherProvider";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { useEffect } from "react";
import useSWR from "swr";

export default function User() {
  const { fetcher } = useFetcherContext();
  const { data, error, isLoading } = useSWR("/user", fetcher || null);
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
      {isLoading || error ? (
        isLoading ? (
          <Loading />
        ) : (
          <Error message={error.message} />
        )
      ) : (
        <>
          <UserInfo user={data} />
          <div className="flex gap-4">
            <LinkButton href="/user/edit" color="yellow">
              <span>Editar</span>
            </LinkButton>
            <button className="p-2 hover:bg-red-700 bg-red-600 rounded-md">
              Excluir
            </button>
          </div>
        </>
      )}
    </div>
  );
}
