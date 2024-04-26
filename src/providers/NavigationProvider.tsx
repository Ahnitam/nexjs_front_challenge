import { RouteNavigation } from "@/interfaces/RouteNavigation";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

interface NavigationProviderProps extends PropsWithChildren {}
interface NavigationContextType {
  navigationRoutes: RouteNavigation[];
  setNavigationRoutes?: (routes: RouteNavigation[]) => void;
}
const NavigationContext = createContext<NavigationContextType>({
  navigationRoutes: [],
  setNavigationRoutes: undefined,
});

export function useNavigationContext() {
  return useContext(NavigationContext);
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [routes, setRoutes] = useState<RouteNavigation[]>([]);
  const setFunction = useCallback((routesNavigation: RouteNavigation[]) => {
    setRoutes(routesNavigation);
  }, []);
  return (
    <NavigationContext.Provider
      value={{ navigationRoutes: routes, setNavigationRoutes: setFunction }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
