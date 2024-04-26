interface ErrorProps {
  message?: string;
}

export function Error({ message }: ErrorProps) {
  return (
    <div className="grow flex justify-center items-center h-full w-full">
      <span>{message || "Error"}</span>
    </div>
  );
}
