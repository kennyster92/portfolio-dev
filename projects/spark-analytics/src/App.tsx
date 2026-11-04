import type { MicroFrontendProps } from "@portfolio/mfe-contract";
import "./index.css";

/**
 * Spark analytics — entry component exposed to the shell as `./App`.
 *
 * Spark runs server-side; this UI submits jobs and visualises their results
 * through a small API in front of a Spark cluster (or Spark Connect).
 *
 * TODO:
 * - [ ] Backend service + Spark master/worker (or Spark Connect) in docker-compose
 * - [ ] Sample dataset (e.g. NYC taxi trips or public logs) in Parquet
 * - [ ] Predefined batch jobs: aggregations, joins, window functions
 * - [ ] Submit a job from the UI and poll its status / stages
 * - [ ] Result tables and charts
 * - [ ] Query plan view (logical vs physical, partitions, shuffles)
 * - [ ] Structured Streaming job reading from the kafka-stream topic
 * - [ ] Performance notes: caching, partitioning, broadcast joins
 */
export default function App(_props: MicroFrontendProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold">Spark analytics</h2>
      <p className="mt-1 text-sm text-muted">Not implemented yet.</p>
    </div>
  );
}
