import { AiOutlineUser } from "react-icons/ai";

interface UserInfoProps {
  user: any;
}

export function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <AiOutlineUser size={128} />
      <h1 className="text-2xl">Usuário</h1>
      <div className="flex flex-col gap-2">
        <span>Nome: {user.name}</span>
        <span>Email: {user.email}</span>
      </div>
    </div>
  );
}
