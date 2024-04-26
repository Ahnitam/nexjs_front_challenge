import { PagesNavigation } from "@/components/PagesNavigation";
import { RouteNavigation } from "@/interfaces/RouteNavigation";
import { useFetcherContext } from "@/providers/FetcherProvider";
import useSWR from "swr";

const navigationRoutes: RouteNavigation[] = [
  {
    href: "/",
    title: "Inicio",
  },
  {
    href: "/user",
    title: "Usuário",
  },
];
export default function User() {
  const { fetcher } = useFetcherContext();
  const { data, error } = useSWR("/user", fetcher || null);

  console.log(data, error);
  return (
    <div className="flex flex-col h-full w-full items-start p-2 gap-2">
      <PagesNavigation routes={navigationRoutes} />
      <div className="flex flex-col grow w-full bg-gray-800 rounded-xl p-4 gap-4">
        <table>
          <tbody>
            <tr>
              <th>Nome</th>
              <td>{data?.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
