import { Header } from "./Header";
import { Inter } from "next/font/google";
import { PagesNavigation } from "./PagesNavigation";
import { usePaginationContext } from "@/providers/PaginationProvider";

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: { children?: React.ReactNode }) {
  const { navigationRoutes: navigationRoutes } = usePaginationContext();
  return (
    <div
      className={`flex flex-col h-screen max-h-screen ${inter.className} overflow-hidden`}
    >
      <Header />
      <main className="grow">
        <div className="flex flex-col h-full w-full items-start p-2 gap-2">
          <PagesNavigation routes={navigationRoutes} />
          {children}
        </div>
      </main>
    </div>
  );
}
