import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { profile } from "../config/profile";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/cv", label: "CV" },
  { href: "/#contact", label: "Contact" },
];

/** Scrolls to `#section` anchors (and to top on page change), which the router doesn't do itself. */
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0 });
  }, [pathname, hash]);
}

export function Layout() {
  useScrollOnNavigate();

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="print:hidden sticky top-0 z-40 border-b border-border/70 bg-bg/75 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-mono text-sm text-white">
              {"</>"}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>
          <nav className="flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface-2 hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 print:p-0">
        <Outlet />
      </main>

      <footer className="print:hidden border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Shell + microfrontends · React, Vite & Module Federation</p>
        </div>
      </footer>
    </div>
  );
}
