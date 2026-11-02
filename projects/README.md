# Mini projects (microfrontends)

Each folder here is an independent Vite + React app exposed via Module Federation
and loaded by the shell (`apps/shell`) at runtime.

## Add a project

```bash
cp -r projects/_template projects/task-board
```

1. `package.json` → set `"name"` to the folder name (`task-board`).
2. `vite.config.ts` → set `NAME` (snake_case, e.g. `task_board`) and a unique `PORT`.
3. `apps/shell/src/projects/registry.ts` → add/uncomment the `remote` block:
   `remote: { name: "task_board", entry: remoteEntry("task-board", 5174) }`
   and set `status` to `"wip"` or `"live"`.
4. `pnpm install`, then `pnpm dev:all` from the repo root.
5. Deploy: add a service named `mfe-<folder name>` to `docker-compose.yml`
   (copy the commented `mfe-task-board` example). Production builds are served by
   the shell at `/remotes/<folder name>/`, so the folder name, registry `id` and
   service suffix must match.

## Contract

A remote exposes `./App`, whose default export is a React component receiving
`MicroFrontendProps` (`basePath`, `theme`) from `@portfolio/mfe-contract`.
React and React DOM are shared singletons.

## Styling

`src/index.css` (loaded with `App`) contains Tailwind utilities only, so a mounted
remote inherits the shell's fonts, tokens and dark mode instead of overriding them.
The reset and token values for standalone dev live in `src/standalone.css`, which only
`main.tsx` imports. Keep global styles out of anything `App` imports.

`_template` is excluded from the workspace and is never installed or built.
