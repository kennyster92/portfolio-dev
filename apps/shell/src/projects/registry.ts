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
    id: "scatter-plot",
    title: "Large-scale Data Visualisation",
    summary: "Interactive scatter plot of up to 500,000 points with zoom, filtering and Canvas/WebGL rendering.",
    tags: ["React", "WebGL", "Web Workers", "Performance"],
    status: "wip",
    remote: { name: "scatter_plot", entry: remoteEntry("scatter-plot", 5174) },
  },
  {
    id: "component-library",
    title: "Component Library",
    summary: "Accessible, themeable React components with an interactive playground.",
    tags: ["React", "TypeScript", "A11y", "Design systems"],
    status: "wip",
    remote: { name: "component_library", entry: remoteEntry("component-library", 5175) },
  },
  {
    id: "task-board",
    title: "Collaborative Task Board",
    summary: "Real-time multi-user kanban with drag-and-drop, optimistic UI and conflict handling.",
    tags: ["React", "WebSockets", "Real-time"],
    status: "wip",
    remote: { name: "task_board", entry: remoteEntry("task-board", 5176) },
  },
  {
    id: "api-explorer",
    title: "API Performance Explorer",
    summary: "Dashboard comparing request strategies: parallel vs sequential, retries, caching and cancellation.",
    tags: ["Async", "Networking", "Performance"],
    status: "wip",
    remote: { name: "api_explorer", entry: remoteEntry("api-explorer", 5177) },
  },
  {
    id: "search-catalogue",
    title: "Search Catalogue",
    summary: "Full-text search with faceted filters, URL-synced state and server-side filtering.",
    tags: ["React", "Search", "API design"],
    status: "wip",
    remote: { name: "search_catalogue", entry: remoteEntry("search-catalogue", 5178) },
  },
  {
    id: "admin-auth",
    title: "Admin Panel",
    summary: "Role-based admin interface with protected routes, token refresh and server-enforced permissions.",
    tags: ["Auth", "Security", "Full-stack"],
    status: "wip",
    remote: { name: "admin_auth", entry: remoteEntry("admin-auth", 5179) },
  },
];

export function findProject(id: string | undefined) {
  return projects.find((p) => p.id === id);
}
