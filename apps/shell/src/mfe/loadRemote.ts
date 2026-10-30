import { loadRemote, registerRemotes } from "@module-federation/runtime";
import type { MicroFrontendModule, ProjectManifest } from "@portfolio/mfe-contract";

type Remote = NonNullable<ProjectManifest["remote"]>;

const registered = new Set<string>();
const cache = new Map<string, Promise<MicroFrontendModule>>();

/** Registers the remote on first use and loads its exposed module (cached). */
export function loadMicroFrontend(remote: Remote): Promise<MicroFrontendModule> {
  const module = (remote.module ?? "./App").replace(/^\.\//, "");
  const key = `${remote.name}/${module}`;

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
    // Drop failures so a retry can re-fetch.
    pending.catch(() => cache.delete(key));
    cache.set(key, pending);
  }
  return pending;
}
