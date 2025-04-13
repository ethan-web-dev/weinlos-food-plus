import { ThemeToggle } from "@/islands/ThemeToggle.tsx";

export function Footer() {
  return (
    <footer class="w-11/12 max-w-5xl mx-auto mt-24 sm:!mt-28 mb-8 flex items-center justify-between">
      <a
        class="text-sm text-gray-400 hidden items-center gap-2 sm:!flex"
        href="/"
      >
        <span class="text-gray-600">
          Built By Beeler
        </span>
      </a>
      <ThemeToggle />
    </footer>
  );
}
