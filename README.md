# Developer Portfolio — Shell + Microfrontends

A personal developer portfolio built as a **microfrontend platform**. A lightweight React
**shell** renders the portfolio (hero, project grid, skills, contact) and loads each
**mini project** — a small, independently built app that showcases one skill — at runtime
via [Module Federation](https://module-federation.io/).

**Stack:** React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · React Router · Module Federation (`@module-federation/vite`) · pnpm workspaces

---

## Project structure

```
portfolio-dev/
├── apps/
│   └── shell/                  # Host app: layout, routing, theming, remote loading
│       ├── index.html          # Applies the saved theme before first paint (no flash)
│       ├── vite.config.ts      # Federation host, React/ReactDOM shared as singletons
│       ├── .env.example        # Per-environment remote URL overrides
│       └── src/
│           ├── main.tsx        # Entry: ThemeProvider + global styles
│           ├── App.tsx         # Routes
│           ├── config/
│           │   └── profile.ts  # Your name, role, links, skills — edit this
│           ├── projects/
│           │   └── registry.ts # List of mini projects and where their remotes live
│           ├── mfe/            # Microfrontend runtime
│           │   ├── loadRemote.ts    # Registers + loads remotes, with caching
│           │   ├── RemoteApp.tsx    # Suspense / error boundary / retry wrapper
│           │   └── ErrorBoundary.tsx
│           ├── pages/          # HomePage, ProjectPage, NotFoundPage
│           ├── components/     # Layout, ProjectCard, StatusBadge, ThemeToggle
│           ├── lib/theme.tsx   # Light/dark theme context
│           └── styles/index.css# Tailwind + design tokens
├── packages/
│   └── mfe-contract/           # Shared TypeScript contract between shell and remotes
├── projects/
│   ├── _template/              # Starter for a new mini project (not built)
│   └── README.md               # How to add a mini project
├── package.json                # Root scripts
├── pnpm-workspace.yaml         # Workspaces: apps/*, projects/*, packages/*
└── tsconfig.base.json          # Shared compiler options
```

| Folder | Role |
| --- | --- |
| `apps/` | Deployable host applications. Today only the `shell`. |
| `projects/` | One folder per mini project. Each is its own Vite app and federation **remote**, built and deployed independently. |
| `packages/` | Code shared at build time. `@portfolio/mfe-contract` defines the types both sides agree on. |

---

## How the shell works

### Routing — `src/App.tsx`

```
/                       → HomePage     (hero, project grid, skills, contact)
/projects/:projectId/*  → ProjectPage  (mounts the project's remote)
*                       → NotFoundPage
```

All routes render inside `Layout` (sticky header, theme toggle, footer). The project
route ends in a splat (`/*`), so a remote can own its own nested routes under its
`basePath`.

### Project registry — `src/projects/registry.ts`

The single source of truth for what the portfolio shows. Each entry is a
`ProjectManifest`:

```ts
{
  id: "task-board",                 // URL slug → /projects/task-board
  title: "Task Board",
  summary: "Drag-and-drop kanban …",
  tags: ["React", "DnD", "State"],
  status: "live" | "wip" | "planned",
  remote: {                         // omit while the project is only planned
    name: "task_board",             // federation name of the remote
    entry: remoteEntry("task-board", 5174),
  },
}
```

`remoteEntry(id, port)` resolves to `http://localhost:<port>/remoteEntry.js` in
development, or to the value of `VITE_REMOTE_<ID>` (for example
`VITE_REMOTE_TASK_BOARD`) when set, so production can point at a CDN without
code changes. Projects without a `remote` show an "Under construction" placeholder.

### Runtime remote loading — `src/mfe/`

Remotes are **not** declared in `vite.config.ts`. The shell is a federation host with
`remotes: {}` and registers remotes on demand, so adding a project never touches the
shell's build config.

- **`loadRemote.ts`** — `loadMicroFrontend(remote)` calls `registerRemotes` the first
  time a remote is used, then `loadRemote("<name>/App")`. Results are cached per
  module, and failed loads are evicted from the cache so a retry fetches again. It also
  checks that the module has a default export.
- **`RemoteApp.tsx`** — wraps the remote in an `ErrorBoundary` and `Suspense`. While
  loading it shows a skeleton. On failure it shows the error with a **Retry** button,
  which remounts the boundary. React 19's `use()` unwraps the load promise, and the
  remote is rendered as `<App basePath={…} theme={…} />`.

### Shared contract — `packages/mfe-contract`

```ts
interface MicroFrontendProps {
  basePath: string;          // e.g. "/projects/task-board"
  theme: "light" | "dark";   // the shell's current theme
}
type MicroFrontendModule = { default: ComponentType<MicroFrontendProps> };
```

Every remote exposes `./App` whose default export matches this contract. `react` and
`react-dom` are shared **singletons**, so the shell and all remotes run on one React
instance.

### Theming and design tokens

- `lib/theme.tsx` keeps the theme in React context, toggles the `dark` class on
  `<html>` and persists the choice to `localStorage`. An inline script in `index.html`
  applies it before first paint to avoid a flash.
- `styles/index.css` defines design tokens with Tailwind 4's `@theme`
  (`--color-bg`, `--color-fg`, `--color-surface`, `--color-accent`, …) and
  overrides them under `.dark`.
- Remotes use the same token names and load **only Tailwind utilities** (no reset,
  no `:root` theme). A mounted remote therefore inherits the shell's fonts, colors and
  dark mode instead of overriding them. See [`projects/README.md`](projects/README.md#styling).

### Personal content — `src/config/profile.ts`

Name, role, tagline, location, email, social links and skill groups shown by the shell.

---

## Getting started

Requires Node 20+ and pnpm.

```bash
pnpm install
pnpm dev          # shell only → http://localhost:5173
pnpm dev:all      # shell + every mini project in parallel
pnpm build        # build all workspaces
pnpm typecheck
```

## Adding a mini project

```bash
cp -r projects/_template projects/task-board
```

1. In `projects/task-board/package.json`, set `"name"` to `task-board`.
2. In `projects/task-board/vite.config.ts`, set `NAME` to `task_board` and pick a unique `PORT`.
3. In `apps/shell/src/projects/registry.ts`, add a `remote` block to the entry and set its `status`.
4. Run `pnpm install`, then `pnpm dev:all`.

Full details are in [`projects/README.md`](projects/README.md).

## Deployment

Each mini project deploys independently as static files (its `dist/` contains
`remoteEntry.js`). Deploy the shell with `VITE_REMOTE_<ID>` variables pointing at each
remote's public `remoteEntry.js`. Updating a mini project then needs no shell rebuild.
