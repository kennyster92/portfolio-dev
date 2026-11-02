import type { ProjectManifest } from "@portfolio/mfe-contract";

/**
 * Remote entry URL. Dev: the remote's own dev server. Production: same-origin
 * `/remotes/<id>/`, proxied by the shell's nginx (see docker/). Override either
 * per environment via VITE_REMOTE_<ID>.
 */
export function remoteEntry(id: string, devPort: number) {
  const key = `VITE_REMOTE_${id.toUpperCase().replace(/-/g, "_")}`;
  const fromEnv = (import.meta.env as Record<string, string | undefined>)[key];
  const fallback = import.meta.env.DEV
    ? `http://localhost:${devPort}/remoteEntry.js`
    : `/remotes/${id}/remoteEntry.js`;
  return new URL(fromEnv ?? fallback, window.location.origin).href;
}

/**
 * Every mini project the shell knows about. To add one:
 *   1. copy `projects/_template` to `projects/<id>` and set its name + port
 *   2. add an entry here with a `remote` block
 */
export const projects: ProjectManifest[] = [
  {
    id: "task-board",
    title: "Task Board",
    summary: "Drag-and-drop kanban with optimistic updates and local persistence.",
    tags: ["React", "DnD", "State"],
    status: "planned",
    // remote: { name: "task_board", entry: remoteEntry("task-board", 5174) },
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    summary: "Live forecasts with charts, geolocation and offline caching.",
    tags: ["Data viz", "APIs", "PWA"],
    status: "planned",
  },
  {
    id: "markdown-editor",
    title: "Markdown Editor",
    summary: "Split-pane editor with live preview, syntax highlighting and export.",
    tags: ["Editor", "Parsing"],
    status: "planned",
  },
  {
    id: "algo-visualizer",
    title: "Algorithm Visualizer",
    summary: "Step-through animations of sorting and pathfinding algorithms.",
    tags: ["Canvas", "Algorithms"],
    status: "planned",
  },
];

export function findProject(id: string | undefined) {
  return projects.find((p) => p.id === id);
}
