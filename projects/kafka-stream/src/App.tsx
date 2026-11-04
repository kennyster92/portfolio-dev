import type { MicroFrontendProps } from "@portfolio/mfe-contract";
import "./index.css";

/**
 * Kafka event stream — entry component exposed to the shell as `./App`.
 *
 * Browsers can't talk to Kafka directly, so this needs a small backend
 * (producer + consumer) that bridges topics to the UI over WebSockets/SSE.
 *
 * TODO:
 * - [ ] Backend service + Kafka broker (KRaft mode, no ZooKeeper) in docker-compose
 * - [ ] Producer: simulated event source (e.g. orders, clicks, sensor readings)
 * - [ ] Consumer bridge: topic → WebSocket / Server-Sent Events
 * - [ ] Live event feed with pause/resume
 * - [ ] Throughput chart (events/sec) and per-partition breakdown
 * - [ ] Consumer groups and lag visualisation
 * - [ ] Produce a custom event from the UI
 * - [ ] Delivery semantics explained (at-least-once, idempotent producer)
 */
export default function App(_props: MicroFrontendProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold">Kafka event stream</h2>
      <p className="mt-1 text-sm text-muted">Not implemented yet.</p>
    </div>
  );
}
