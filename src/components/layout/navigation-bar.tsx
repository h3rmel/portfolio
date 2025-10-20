import { ThemeToggle } from "../theme-toggle";

export function NavigationBar() {
  return (
    <header className="sticky top-0 left-0 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl border border-t-0 p-4 rounded-b-xl">
        <ThemeToggle />
      </nav>
    </header>
  );
}
