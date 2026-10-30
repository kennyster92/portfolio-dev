import type { ProjectManifest } from "@portfolio/mfe-contract";
import { Link } from "react-router";
import { StatusBadge } from "./StatusBadge";

export function ProjectCard({ project }: { project: ProjectManifest }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full bg-gradient-to-br from-accent/20 to-accent-2/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
      />
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-surface-2 px-2 py-1 font-mono text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Open project
        <span className="transition group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
