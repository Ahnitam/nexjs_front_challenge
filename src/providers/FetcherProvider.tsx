import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";

interface FetcherProviderProps extends PropsWithChildren {}
interface FetcherContextType {
  fetcher?: (url: string | URL | Request, method?: string) => Promise<any>;
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
  let fetcher = useCallback(
    async (url: string | URL | Request, method?: string) => {
      const r = await fetch(`${process.env.API_URL}${url}`, {
        method: method || "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer 5|mJJ82jAg7J9PH27NnuMCZnSPOg4UJFo0ekR1X22X708766a2",
        },
      });
      if (r.status === 401) {
        throw new Error("Não autorizado");
      } else if (r.status === 404) {
        throw new Error("Não encontrado");
      } else if (!r.ok) {
        throw new Error("Falha ao buscar dados");
      }
      return r.json();
    },
    []
  );

  return (
    <FetcherContext.Provider value={{ fetcher }}>
      {children}
    </FetcherContext.Provider>
  );
}
