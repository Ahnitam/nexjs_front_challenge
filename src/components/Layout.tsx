import { Header } from "./Header";
import { Inter } from "next/font/google";
import { PagesNavigation } from "./PagesNavigation";
import { useNavigationContext } from "@/providers/NavigationProvider";

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: { children?: React.ReactNode }) {
  const { navigationRoutes: navigationRoutes } = useNavigationContext();
  return (
    <div
      className={`flex flex-col h-screen max-h-screen ${inter.className} overflow-hidden`}
    >
      <Header />
      <main className="grow flex flex-col w-full items-start p-2 gap-2">
        <PagesNavigation routes={navigationRoutes} />
        <div className="grow w-full overflow-x-auto">{children}</div>
      </main>
    </div>
  );
}
