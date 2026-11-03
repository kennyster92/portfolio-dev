import type { MicroFrontendProps } from "@portfolio/mfe-contract";
import "./index.css";

/**
 * Admin panel — entry component exposed to the shell as `./App`.
 *
 * TODO:
 * - [ ] Login
 * - [ ] Different user roles
 * - [ ] Permission-based UI
 * - [ ] Protected routes
 * - [ ] Token refresh
 * - [ ] API-side authorisation (the backend must enforce permissions, not just the UI)
 */
export default function App(_props: MicroFrontendProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold">Admin panel</h2>
      <p className="mt-1 text-sm text-muted">Not implemented yet.</p>
    </div>
  );
}
