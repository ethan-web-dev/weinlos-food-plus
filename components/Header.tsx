import Cart from "../islands/Cart.tsx";

export function Header() {
  return (
    <header
      class="h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "var(--header-bg)",
      }}
    >
      <nav class="w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative">
        <a href="/">
          <img
            src="/logo.svg"
            alt="Weinlos Food Plus Logo"
            width="155"
            height="155"
            class="-mb-12"
          />
        </a>
        <Cart />
      </nav>
    </header>
  );
}
