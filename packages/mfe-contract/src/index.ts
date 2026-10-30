import type { ComponentType } from "react";

/**
 * Contract between the shell and every mini-project microfrontend.
 *
 * Each remote exposes `./App` whose default export is a React component
 * accepting these props.
 */
export interface MicroFrontendProps {
  /** Base path the shell mounted the remote under, e.g. `/projects/task-board`. */
  basePath: string;
  /** Current shell theme so remotes can match it. */
  theme: "light" | "dark";
}

export type MicroFrontendModule = { default: ComponentType<MicroFrontendProps> };

export type ProjectStatus = "live" | "wip" | "planned";

export interface ProjectManifest {
  /** URL slug, also used as the route segment. */
  id: string;
  title: string;
  summary: string;
  tags: string[];
  status: ProjectStatus;
  /** Module Federation remote; omitted while the project is only planned. */
  remote?: {
    /** Federation name, must match `name` in the remote's vite config. */
    name: string;
    /** URL of the remote's `remoteEntry.js`. */
    entry: string;
    /** Exposed module, defaults to `./App`. */
    module?: string;
  };
}
