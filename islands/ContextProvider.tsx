import type { ComponentChildren } from "preact";
import { useContext } from "preact/hooks";
import { AppContext } from "@/features/Context.ts";

export function Provider({ children }: { children: ComponentChildren }) {
  const {
    theme,
    setTheme,
  } = useContext(AppContext);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
