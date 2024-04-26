import { createContext, PropsWithChildren, useContext } from "react";

interface FetcherProviderProps extends PropsWithChildren {}
interface FetcherContextType {
  fetcher?: (url: string | URL | Request) => Promise<any>;
}
const FetcherContext = createContext<FetcherContextType>({});

export function useFetcherContext() {
  return useContext(FetcherContext);
}
// challenge.test
// 2|0DxKJY0c1VKerikZoT54emnyDxK4xHbLf3R2fIcw7a698ca4

// Local
// 5|mJJ82jAg7J9PH27NnuMCZnSPOg4UJFo0ekR1X22X708766a2

export function FetcherProvider({ children }: FetcherProviderProps) {
  let value = {
    fetcher: async (url: string | URL | Request) => {
      const r = await fetch(`http://localhost:8000/api${url}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer 5|mJJ82jAg7J9PH27NnuMCZnSPOg4UJFo0ekR1X22X708766a2",
        },
      });
      if (r.status === 401) {
        throw new Error("Não autorizado");
      } else if (!r.ok) {
        throw new Error("Falha ao buscar dados");
      }
      return r.json();
    },
  };
  return (
    <FetcherContext.Provider value={value}>{children}</FetcherContext.Provider>
  );
}
