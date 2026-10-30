import { Link, useParams } from "react-router";
import { StatusBadge } from "../components/StatusBadge";
import { RemoteApp } from "../mfe/RemoteApp";
import { findProject } from "../projects/registry";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectPage() {
  const { projectId } = useParams();
  const project = findProject(projectId);
  if (!project) return <NotFoundPage />;

  return (
    <div>
      <Link to="/#projects" className="text-sm text-muted transition hover:text-fg">
        ← All projects
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-2 max-w-2xl text-muted">{project.summary}</p>

      <div className="mt-8">
        {project.remote ? (
          <RemoteApp remote={project.remote} basePath={`/projects/${project.id}`} />
        ) : (
          <ComingSoon />
        )}
      </div>
    </div>
  );
}

function ComingSoon() {
  return (
    <div className="grid place-items-center rounded-2xl border border-dashed border-border bg-surface/50 px-6 py-20 text-center">
      <div className="grid size-12 place-items-center rounded-xl bg-surface-2 font-mono text-muted">{"{ }"}</div>
      <h2 className="mt-4 font-semibold">Under construction</h2>
      <p className="mt-1 max-w-sm text-sm text-muted">
        This mini project hasn't shipped yet. Scaffold it from <code className="font-mono">projects/_template</code>{" "}
        and register its remote to see it here.
      </p>
    </div>
  );
}
