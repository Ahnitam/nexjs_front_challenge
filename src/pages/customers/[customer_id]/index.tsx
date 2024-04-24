import { useRouter } from "next/router";

export default function Customer() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-4xl font-bold">{router.query.customer_id}</h1>
    </main>
  );
}
