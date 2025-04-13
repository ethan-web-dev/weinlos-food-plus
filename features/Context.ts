import { createContext } from "preact";
import { useContext } from "preact/hooks";
import { setTheme, theme, type ThemeSignalContext } from "@/features/Theme.ts";

type AppContext = ThemeSignalContext;

export const AppContext = createContext<AppContext>({
  theme,
  setTheme,
});

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "Warning, cannot access app context. useAppContext must be used within the Provider.",
    );
  }

  return context;
}
