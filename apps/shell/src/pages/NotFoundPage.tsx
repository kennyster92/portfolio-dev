import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="grid place-items-center py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
      <Link to="/" className="mt-6 rounded-xl bg-fg px-5 py-3 text-sm font-medium text-bg transition hover:opacity-90">
        Back home
      </Link>
    </div>
  );
}
