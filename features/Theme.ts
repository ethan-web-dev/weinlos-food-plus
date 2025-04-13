import { type Signal, signal } from "@preact/signals";

type Theme = "dark" | "light" | "system";

export type ThemeSignalContext = {
  theme: Signal<Theme>;
  setTheme: () => void;
};

export const theme = signal<Theme>("system");

const storedTheme = globalThis?.localStorage?.getItem("theme") as Theme | null;

// Determine the initial theme based on the stored value or system preference
if (storedTheme) {
  theme.value = storedTheme;
  setCSSTheme(storedTheme);
} else {
  const systemPreference = getSystemPreference();
  theme.value = systemPreference;
  setCSSTheme(systemPreference);
}

export function setTheme(newTheme?: Theme) {
  if (newTheme) {
    theme.value = newTheme;
    globalThis.localStorage?.setItem("theme", newTheme);
    const effectiveTheme = newTheme === "system"
      ? getSystemPreference()
      : newTheme;
    setCSSTheme(effectiveTheme);
  } else {
    // Default toggle behavior if no newTheme is provided
    const toggledTheme = theme.value === "light" ? "dark" : "light";
    theme.value = toggledTheme;
    globalThis.localStorage?.setItem("theme", toggledTheme);
    setCSSTheme(toggledTheme);
  }
}

function setCSSTheme(theme: Theme) {
  const doc = globalThis.document;
  if (!doc) return;

  const classList = doc.documentElement.classList;

  // Temporarily disable transitions
  classList.add("disable-transitions");

  // Remove all theme classes first
  classList.remove("light", "dark", "system");

  // Resolve 'system' to actual theme
  if (theme === "system") {
    theme = getSystemPreference();
  }

  // Apply the desired theme class
  classList.add(theme);

  // Re-enable transitions after a short delay
  globalThis.window.requestAnimationFrame(() => {
    globalThis.window.setTimeout(() => {
      classList.remove("disable-transitions");
    }, 0); // Could also use 50ms if needed
  });
}

// Helper function to get the user's system preference
function getSystemPreference(): Theme {
  if (
    typeof window !== "undefined" &&
    typeof globalThis.window.matchMedia === "function"
  ) {
    return globalThis.window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light"; // Default to "light" if not in a browser environment
}
