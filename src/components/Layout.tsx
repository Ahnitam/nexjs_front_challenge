import { Header } from "./Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={`flex flex-col h-screen max-h-screen ${inter.className} overflow-hidden`}
    >
      <Header />
      <main className="grow">{children}</main>
    </div>
  );
}
