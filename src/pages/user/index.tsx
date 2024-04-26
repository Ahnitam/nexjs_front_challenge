import { useFetcherContext } from "@/providers/FetcherProvider";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { useEffect } from "react";
import useSWR from "swr";

export default function User() {
  const { fetcher } = useFetcherContext();
  const { data, error } = useSWR("/user", fetcher || null);
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
    <div className="flex flex-col h-full w-full bg-gray-800 rounded-xl p-4 gap-4">
      <table>
        <tbody>
          <tr>
            <th>Nome</th>
            <td>{data?.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
