import type { ProjectStatus } from "@portfolio/mfe-contract";

const styles: Record<ProjectStatus, { label: string; className: string }> = {
  live: { label: "Live", className: "bg-success/12 text-success" },
  wip: { label: "In progress", className: "bg-warning/15 text-warning" },
  planned: { label: "Planned", className: "bg-surface-2 text-muted" },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { label, className } = styles[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
      <span className="size-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}
