import type { MicroFrontendProps } from "@portfolio/mfe-contract";
import "./index.css";

/**
 * API performance explorer — entry component exposed to the shell as `./App`.
 *
 * TODO:
 * - [ ] Simulated slow and fast APIs
 * - [ ] Parallel versus sequential requests
 * - [ ] Request cancellation
 * - [ ] Retry strategies
 * - [ ] Caching
 * - [ ] Loading and error states
 * - [ ] Response times and request waterfalls
 */
export default function App(_props: MicroFrontendProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold">API performance explorer</h2>
      <p className="mt-1 text-sm text-muted">Not implemented yet.</p>
    </div>
  );
}
