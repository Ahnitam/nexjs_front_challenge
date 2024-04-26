import { LinkButton } from "@/components/LinkButton";
import { useNavigationContext } from "@/providers/NavigationProvider";
import { useEffect } from "react";

export default function Home() {
  const { setNavigationRoutes } = useNavigationContext();
  useEffect(() => {
    setNavigationRoutes?.([
      {
        href: "/",
        title: "Inicio",
      },
    ]);
  }, [setNavigationRoutes]);
  return (
    <main className="flex flex-col min-h-full items-center justify-around p-12">
      <h1 className="text-4xl font-bold">Bem vindo</h1>
      <p className="text-lg">
        Este é um projeto de um desafio para demonstrar o uso de Next.js com
        TailwindCSS.
      </p>
      <p>Gerenciamento de Clientes com Cartão</p>
      <LinkButton href="/customers" color="green">
        <span>Acessar</span>
      </LinkButton>
    </main>
  );
}
