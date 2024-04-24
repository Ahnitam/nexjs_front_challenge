import useSWR from "swr";

const fetcher = (url: string | URL | Request) =>
  fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer 2|BMJeHEVWCkVOUx7Psjgfxg26iDTh9WLPLlWKOd7If1eee604",
    },
  }).then((r) => r.json());

export default function Customers() {
  const { data, error } = useSWR(
    "http://localhost:8000/api/customers",
    fetcher
  );

  console.log(data, error);
  return (
    <div className="flex flex-col h-full w-full items-start p-2 gap-2">
      <h1 className="font-bold">Lista de Clientes</h1>
      <div className="flex flex-col grow w-full bg-gray-800 rounded-xl p-4 gap-4">
        <label className="font-bold text-nowrap">
          Buscar por nome:
          <input
            name="search"
            type="text"
            className="mx-2 w-96 p-1 border border-gray-600 rounded-md bg-gray-700"
          />
        </label>
        <div className="flex flex-col w-full rounded-xl">
          <table>
            <tbody>
              {data?.map((customer: any) => (
                <tr key={customer.id} className="hover:bg-gray-700 ">
                  <td className="rounded-l-xl">
                    <span className="grow font-bold text-ellipsis overflow-hidden inline text-nowrap">
                      {customer.name} ({customer.email})
                    </span>
                  </td>
                  <td className="rounded-r-xl">
                    <div className="min-w-64 flex justify-end gap-2">
                      <button className="p-2 bg-green-600 text-white rounded-md">
                        Informações
                      </button>
                      <button className="p-2 bg-yellow-600 text-white rounded-md">
                        Cartôes
                      </button>
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
