import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";

type FetcherMethods = "GET" | "POST" | "PUT" | "DELETE";
export interface FetcherCallback {
  (
    url: string | URL | Request,
    method?: FetcherMethods,
    body?: any
  ): Promise<any>;
}
interface FetcherProviderProps extends PropsWithChildren {}
interface FetcherContextType {
  fetcher?: FetcherCallback;
}
const FetcherContext = createContext<FetcherContextType>({});

export function FetcherProvider({ children }: FetcherProviderProps) {
  let fetcher = useCallback<FetcherCallback>(async (url, method, body) => {
    console.log("fetcher", url, method, body);
    const r = await fetch(`${process.env.API_URL}${url}`, {
      method: method || "GET",
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: "Bearer ",
      },
    });
    if (r.status === 401) {
      throw new Error("Não autorizado");
    } else if (r.status === 404) {
      throw new Error("Não encontrado");
    } else if (r.status < 200 && r.status >= 300) {
      throw new Error("Falha ao buscar dados");
    }
    return r.json();
  }, []);

  return (
    <FetcherContext.Provider value={{ fetcher }}>
      {children}
    </FetcherContext.Provider>
  );
}

export function useFetcherContext() {
  return useContext(FetcherContext);
}
