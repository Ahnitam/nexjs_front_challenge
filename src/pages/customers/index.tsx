import Link from "next/link";
import useSWR from "swr";
import { AiOutlineUserAdd } from "react-icons/ai";

const fetcher = (url: string | URL | Request) =>
  fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer 1|nF3EKeL897Rzyl80sOSnYdg9CwqfiGWnJGGQgxVi7354bfc4",
    },
  }).then((r) => r.json());

export default function Customers() {
  const { data, error } = useSWR(
    "http://challenge.test/api/customers",
    fetcher
  );

  console.log(data, error);
  return (
    <div className="flex flex-col h-full w-full items-start p-2 gap-2">
      <h1 className="font-bold">Lista de Clientes</h1>
      <div className="flex flex-col grow w-full bg-gray-800 rounded-xl p-4 gap-4">
        <div className="flex justify-between">
          <label className="font-bold text-nowrap">
            Buscar por nome:
            <input
              name="search"
              type="text"
              className="mx-2 w-96 p-1 border border-gray-600 rounded-md bg-gray-700"
            />
          </label>
          <Link href="/customers/add">
            <button className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-md">
              <AiOutlineUserAdd className="text-white text-4xl cursor-pointer" />
              <span>Adicionar Cliente</span>
            </button>
          </Link>
        </div>
        <div className="flex flex-col w-full rounded-xl">
          <table>
            <tbody>
              {data?.map((customer: any) => (
                <tr key={customer.id} className="hover:bg-gray-700">
                  <td className="rounded-l-xl pl-4">
                    <span className="grow font-bold text-ellipsis overflow-hidden inline text-nowrap">
                      {customer.name} ({customer.email})
                    </span>
                  </td>
                  <td className="rounded-r-xl pr-4">
                    <div className="min-w-64 flex justify-end gap-2">
                      <Link href={`/customers/${customer.id}`}>
                        <button className="p-2 bg-green-600 text-white rounded-md">
                          Informações
                        </button>
                      </Link>
                      <Link href={`/customers/${customer.id}/cards`}>
                        <button className="p-2 bg-yellow-600 text-white rounded-md">
                          Cartôes
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
