import { RouteNavigation } from "@/interfaces/RouteNavigation";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

interface PaginationProviderProps extends PropsWithChildren {}
interface PaginationContextType {
  navigationRoutes: RouteNavigation[];
  setNavigationRoutes?: (routes: RouteNavigation[]) => void;
}
const PaginationContext = createContext<PaginationContextType>({
  navigationRoutes: [],
  setNavigationRoutes: undefined,
});

export function usePaginationContext() {
  return useContext(PaginationContext);
}

export function PaginationProvider({ children }: PaginationProviderProps) {
  const [routes, setRoutes] = useState<RouteNavigation[]>([]);
  const setFunction = useCallback((routesNavigation: RouteNavigation[]) => {
    setRoutes(routesNavigation);
  }, []);
  return (
    <PaginationContext.Provider
      value={{ navigationRoutes: routes, setNavigationRoutes: setFunction }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
