export default function Customers() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-4xl font-bold">Clientes</h1>
      <div className="flex flex-col w-96 space-y-4">
        <div className="p-2 bg-green-600 text-white rounded-md">Cliente 1</div>
        <div className="p-2 bg-green-600 text-white rounded-md">Cliente 2</div>
        <div className="p-2 bg-green-600 text-white rounded-md">Cliente 3</div>
      </div>
    </main>
  );
}
