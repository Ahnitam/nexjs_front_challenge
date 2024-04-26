interface LoadingProps {}

export function Loading({}: LoadingProps) {
  return (
    <div className="grow flex justify-center items-center h-full w-full">
      <span>Carregando...</span>
    </div>
  );
}
