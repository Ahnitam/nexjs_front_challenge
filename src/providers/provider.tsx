import { PropsWithChildren } from "react";
import { FetcherProvider } from "./FetcherProvider";

interface ProviderProps extends PropsWithChildren {}
export function Provider({ children }: ProviderProps) {
  return <FetcherProvider>{children}</FetcherProvider>;
}
