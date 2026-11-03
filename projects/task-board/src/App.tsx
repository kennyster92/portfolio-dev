import type { MicroFrontendProps } from "@portfolio/mfe-contract";
import "./index.css";

/**
 * Collaborative task board — entry component exposed to the shell as `./App`.
 *
 * TODO:
 * - [ ] Multiple users
 * - [ ] Drag-and-drop
 * - [ ] Live updates (WebSockets or Server-Sent Events)
 * - [ ] Optimistic UI
 * - [ ] Conflict handling
 * - [ ] Connection status
 */
export default function App(_props: MicroFrontendProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold">Collaborative task board</h2>
      <p className="mt-1 text-sm text-muted">Not implemented yet.</p>
    </div>
  );
}
