import { ComponentProps } from "react";
import { ItemNavigation } from "./ItemNavigation";
import { RouteNavigation } from "@/interfaces/RouteNavigation";

interface PagesNavigationProps extends ComponentProps<"nav"> {
  routes: RouteNavigation[];
}

export function PagesNavigation({ routes }: PagesNavigationProps) {
  return (
    <nav className="flex h-10 max-w-full items-center gap-2 overflow-x-auto">
      {routes?.map((route, index) => (
        <>
          <ItemNavigation
            key={index}
            href={route.href}
            title={route.title}
            isCurrent={index === routes.length - 1}
          />
          {index < routes.length - 1 ? <span>{">"}</span> : null}
        </>
      ))}
    </nav>
  );
}
