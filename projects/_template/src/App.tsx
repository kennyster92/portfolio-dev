import type { MicroFrontendProps } from "@portfolio/mfe-contract";
import "./index.css";

/** Entry component exposed to the shell as `./App`. */
export default function App({ basePath, theme }: MicroFrontendProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold">Hello from a microfrontend 👋</h2>
      <p className="mt-1 text-sm text-muted">
        Mounted at <code>{basePath}</code> · theme: {theme}
      </p>
    </div>
  );
}
