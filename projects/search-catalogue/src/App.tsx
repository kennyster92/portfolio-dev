import type { MicroFrontendProps } from "@portfolio/mfe-contract";
import "./index.css";

/**
 * Search catalogue — entry component exposed to the shell as `./App`.
 *
 * TODO:
 * - [ ] Full-text search
 * - [ ] Debouncing
 * - [ ] Faceted filtering
 * - [ ] URL-based filter persistence
 * - [ ] Pagination or infinite scrolling
 * - [ ] Server-side filtering
 */
export default function App(_props: MicroFrontendProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold">Search catalogue</h2>
      <p className="mt-1 text-sm text-muted">Not implemented yet.</p>
    </div>
  );
}
