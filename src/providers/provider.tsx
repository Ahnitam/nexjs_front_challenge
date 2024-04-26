import { PropsWithChildren } from "react";
import { FetcherProvider } from "./FetcherProvider";
import { PaginationProvider } from "./PaginationProvider";

interface ProviderProps extends PropsWithChildren {}
export function Provider({ children }: ProviderProps) {
  return (
    <PaginationProvider>
      <FetcherProvider>{children}</FetcherProvider>
    </PaginationProvider>
  );
}
