import type { MicroFrontendProps } from "@portfolio/mfe-contract";
import "./index.css";

/**
 * Large-scale data visualisation — entry component exposed to the shell as `./App`.
 *
 * TODO:
 * - [ ] Interactive scatter plot with 100,000–500,000 synthetic points
 * - [ ] Zoom and pan
 * - [ ] Filtering
 * - [ ] Tooltips
 * - [ ] Dynamic aggregation
 * - [ ] Canvas or WebGL rendering
 * - [ ] Web Workers for computation
 * - [ ] Performance comparison between rendering approaches
 */
export default function App(_props: MicroFrontendProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold">Large-scale data visualisation</h2>
      <p className="mt-1 text-sm text-muted">Not implemented yet.</p>
    </div>
  );
}
