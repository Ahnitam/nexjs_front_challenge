import { ComponentProps } from "react";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";

interface HeaderProps extends ComponentProps<"header"> {}

export function Header(props: HeaderProps) {
  return (
    <header className="bg-gray-800 h-12 min-h-12 flex flex-row">
      <nav className="h-full w-screen flex items-center justify-end px-4 py-2 gap-x-2">
        <div className="flex items-center justify-center h-full hover:bg-gray-900 rounded-xl px-2 gap-2">
          <AiOutlineUser className="text-white" />
          <span className="text-white font-bold">Usuário</span>
        </div>
        <button className="h-full hover:bg-red-800 bg-red-700 px-2 font-bold rounded-xl">
          <AiOutlineLogout className="text-white" />
        </button>
      </nav>
    </header>
  );
}
