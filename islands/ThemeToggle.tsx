import { JSX } from "preact";
import { useAppContext } from "@/features/Context.ts";

const ThemeToggle = (): JSX.Element => {
  const { theme, setTheme } = useAppContext();

  const handleClick = () => setTheme();

  return (
    <button
      type="button"
      onClick={handleClick}
      class="flex align-items-center select-none touch-none mr-16"
    >
      {theme.value === "light"
        ? "light"
        : theme.value === "dark"
        ? "dark"
        : "system"}
    </button>
  );
};

export { ThemeToggle };
