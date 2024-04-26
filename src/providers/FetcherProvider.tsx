import { createContext, PropsWithChildren, useContext } from "react";

interface FetcherProviderProps extends PropsWithChildren {}
interface FetcherContextType {
  fetcher?: (url: string | URL | Request) => Promise<any>;
}
const FetcherContext = createContext<FetcherContextType>({});

export function useFetcherContext() {
  return useContext(FetcherContext);
}

export function FetcherProvider({ children }: FetcherProviderProps) {
  let value = {
    fetcher: async (url: string | URL | Request) => {
      const r = await fetch(`http://challenge.test/api${url}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer 2|0DxKJY0c1VKerikZoT54emnyDxK4xHbLf3R2fIcw7a698ca4",
        },
      });
      return await r.json();
    },
  };
  return (
    <FetcherContext.Provider value={value}>{children}</FetcherContext.Provider>
  );
}
