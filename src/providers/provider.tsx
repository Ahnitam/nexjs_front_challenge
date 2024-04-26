import { PropsWithChildren } from "react";
import { FetcherProvider } from "./FetcherProvider";
import { NavigationProvider } from "./NavigationProvider";

interface ProviderProps extends PropsWithChildren {}
export function Provider({ children }: ProviderProps) {
  return (
    <NavigationProvider>
      <FetcherProvider>{children}</FetcherProvider>
    </NavigationProvider>
  );
}
