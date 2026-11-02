import { loadRemote, registerRemotes } from "@module-federation/runtime";
import type { MicroFrontendModule, ProjectManifest } from "@portfolio/mfe-contract";

type Remote = NonNullable<ProjectManifest["remote"]>;

const registered = new Set<string>();
const cache = new Map<string, Promise<MicroFrontendModule>>();

/** Registers the remote on first use and loads its exposed module (cached). */
export function loadMicroFrontend(remote: Remote): Promise<MicroFrontendModule> {
  const key = cacheKey(remote);

  // Failures stay cached: evicting them here would make every re-render start a
  // new load and suspend forever. Retrying goes through `forgetMicroFrontend`.
  let pending = cache.get(key);
  if (!pending) {
    if (!registered.has(remote.name)) {
      registerRemotes([{ name: remote.name, entry: remote.entry, type: "module" }]);
      registered.add(remote.name);
    }
    pending = loadRemote<MicroFrontendModule>(key).then((mod) => {
      if (!mod?.default) throw new Error(`Remote "${key}" has no default export`);
      return mod;
    });
    cache.set(key, pending);
  }
  return pending;
}

/** Clears a cached load (and the runtime's copy of the remote) so the next load re-fetches it. */
export function forgetMicroFrontend(remote: Remote) {
  cache.delete(cacheKey(remote));
  registerRemotes([{ name: remote.name, entry: remote.entry, type: "module" }], { force: true });
}

function cacheKey(remote: Remote) {
  return `${remote.name}/${(remote.module ?? "./App").replace(/^\.\//, "")}`;
}
