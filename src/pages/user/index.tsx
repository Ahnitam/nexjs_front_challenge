import { PagesNavigation } from "@/components/PagesNavigation";
import { RouteNavigation } from "@/interfaces/RouteNavigation";
import useSWR from "swr";

const fetcher = (url: string | URL | Request) =>
  fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer 2|BMJeHEVWCkVOUx7Psjgfxg26iDTh9WLPLlWKOd7If1eee604",
    },
  }).then((r) => r.json());

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
  const { data, error } = useSWR("http://localhost:8000/api/user", fetcher);

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
