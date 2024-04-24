import { useRouter } from "next/router";

export default function Cards() {
  const router = useRouter();
  console.log(router.query);
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-4xl font-bold">Cartões</h1>
      <div className="flex flex-col w-96 space-y-4">
        <div className="p-2 bg-green-600 text-white rounded-md">Cartão 1</div>
        <div className="p-2 bg-green-600 text-white rounded-md">Cartão 2</div>
        <div className="p-2 bg-green-600 text-white rounded-md">Cartão 3</div>
      </div>
    </main>
  );
}
