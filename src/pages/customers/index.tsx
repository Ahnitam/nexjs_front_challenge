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
    <div className="flex flex-col h-full items-center justify-around p-2">
      <h1 className="text-4xl font-bold">Clientes</h1>
      <div className="flex flex-col w-96 space-y-4">
        <div className="p-2 bg-green-600 text-white rounded-md">Cliente 1</div>
        <div className="p-2 bg-green-600 text-white rounded-md">Cliente 2</div>
        <div className="p-2 bg-green-600 text-white rounded-md">Cliente 3</div>
      </div>
    </div>
  );
}
